
var app = angular.module("myApp", ["myTreeApp"]);

app.controller("myController", ["$scope", function ($scope) {
    $scope.myData = [1, 2, 3];

    $scope.pageSize = 10;

    $scope.tableData =
        [
            {
                Name: "Level 1", Id: "", visible : true, expanded : true,
                children: [
                  {
                      Name: "Level 1.1", Id: "", visible: true, expanded: true,
                      children: [
                          { Name: "Level 1.1.1", Id: "", visible: true, expanded: true },
                          { Name: "Level 1.1.2", Id: "", visible: true, expanded: true }
                      ]
                  },
                  {
                      Name: "Level 1.2", Id: "", visible: true, expanded: true,
                      children: [
                          { Name: "Level 1.2.1", Id: "", visible: true, expanded: true }
                      ]
                  }
                ]
            },
            {
                Name: "Level 2", Id: "", visible: true, expanded: true,
                children: [
                  {
                      Name: "Level 2.1", Id: "", visible: true, expanded: true,
                      children: [
                          { Name: "Level 2.1.1", Id: "", visible: true, expanded: true },
                          { Name: "Level 2.1.2", Id: "", visible: true, expanded: true }
                      ]
                  },
                  {
                      Name: "Level 2.2", Id: "", visible: true, expanded: true,
                      children: [
                          { Name: "Level 1.2.1", Id: "", visible: true, expanded: true }
                      ]
                  }
                ]
            },
            {
                Name: "Level 3", Id: "", visible: true, expanded: true,
                children: [
                  {
                      Name: "Level 3.1", Id: "", visible: true, expanded: true,
                      children: [
                          { Name: "Level 3.1.1", Id: "", visible: true, expanded: true },
                          { Name: "Level 3.1.2", Id: "", visible: true, expanded: true }
                      ]
                  },
                  {
                      Name: "Level 3.2", Id: "", visible: true, expanded: true,
                      children: [
                          { Name: "Level 3.2.1", Id: "", visible: true, expanded: true }
                      ]
                  }
                ]
            },

        ];

}]);
