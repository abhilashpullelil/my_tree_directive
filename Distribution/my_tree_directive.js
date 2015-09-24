
var directiveApp = angular.module('myTreeApp', []);

directiveApp.directive("mytree", function () {
    return {
        restrict : 'E',
        templateUrl : '/my_tree_directive/my_tree_template.html',
        scope: {
            sourceData: '=',
            searchText: '=',
            pageSize: '=',
            expandAll: '='
        },
        link: function (scope, element, attr) {
            //scope.sourceData = attr.sourceData;
            scope.filteredData = [];
            scope.paginationNumber = [];
            scope.paginate_next = false;
            scope.paginate_previous = false;
            scope.previous_searchText = "";
            scope.brachLocked = false;

            var updatePager = function () {
                scope.listLength = scope.filteredData.length;
                var length = (scope.listLength / scope.pageSize);
                if ( length % 1 == 0) {
                    scope.totalPages = length;
                }
                else {
                    scope.totalPages = (scope.listLength / scope.pageSize) + 1;
                }
                
                scope.currentPage = 1;
            }

            // perform expand or collapse all based on the input
            scope.expandCollapseAll = function (isExpandAll) {
                var tempData = scope.sourceData;
                angular.forEach(tempData, function (value, index) {
                    value.expanded = isExpandAll;
                    angular.forEach(value.children, function (val2, index2) {
                        val2.expanded = isExpandAll;
                        // Not expanding 3rd level
                        //angular.forEach(val2.children, function (val3, index3) {
                        //    val3.expanded = isExpandAll;
                        //});
                    });
                });
                scope.sourceData = tempData;
            }

            updatePager();

            // Event - click on a particular number
            scope.page_click = function (page) {
                scope.currentPage = page;
            };

            scope.more_pages_click = function () {
                scope.paginate_next = true;
            };

            scope.unlock_expanding = function () {
                scope.brachLocked = false;
            };

            scope.$watch("pageSize + filteredData", function () {
                updatePager();
                scope.brachLocked = false;
            });

            scope.$watch("sourceData", function () {
                scope.brachLocked = false;
            });

            scope.$watch("expandAll", function (latest, old) {
                if (latest != old) {
                    scope.expandCollapseAll(latest);
                }
            });

            scope.$watch("searchText", function (latest, old) {
                if (latest != old) {
                    scope.brachLocked = true;
                }
            });
            
        }
    };
});

directiveApp.filter("paginate", function () {
    return function (input, total, isNext, isPrevious, currentPage) {
        total = parseInt(total);
        if (total < 5) {
            for (var i = 1; i <= total; i++) {
                input.push(i);
            }
        }
        else {
            if (currentPage < 2) {
                for (var i = 1; i <= 3; i++) {
                    input.push(i);
                }
                input.push(-1);
                input.push(total);
                return input;
            }
            else if (currentPage >= total - 1) {
                input.push(1);
                input.push(-1);
                for (var i = (currentPage - 1) ; i <= total; i++) {
                    input.push(i);
                }
                return input;
            }
            else {
                input.push(1);
                input.push(-1);
                for (var i = (currentPage - 1) ; i <= (currentPage + 1) ; i++) {
                    input.push(i);
                }
                input.push(-2);
                input.push(total);
            }
            return input;
        }
        
        return input;
    };
});

directiveApp.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

directiveApp.filter('customFilter', function () {
    return function (array, search, brachLocked) {
        if (search == null || search == "") {
            return array;
        }
        var filtered = [];
        search = search.toLowerCase();
        angular.forEach(array, function (item) {
            if (item.Name.toLowerCase().indexOf(search) >= 0)
            {
                filtered.push(item);
            }
            else {
                angular.forEach(item.children, function (property) {
                    if (property.Name.toLowerCase().indexOf(search) >= 0) {
                        if (brachLocked) {
                            item.expanded = true;
                        }
                        filtered.push(item);
                    }
                });
            }
        });
        return filtered;
    }
});
