# my_tree_directive
Custom angular directive for simple data tree structure with pagination and search feature.

I am just started to implement a expandable data tree using angularJs custom directive.

Main features of this directive are, </n>
<ul>
	<li> Plugable </li>
	<li> Searchable</li>
	<li> Paginated</li>
</ul>

 
# How to use my-tree-directive

I have divided this directive into three files for ease of understand and work.

You can find these under Distritution folder. Download it and link js and css files in your application.

You need to add these three file to your solution. They are,
<ul>
	<li> my_tree_directive.js</li>
	<li> my_tree_directive.css </li>
	<li> my_tree_template.html </li>
</ul>

<h2> Important : Change templateUrl in my_tree_directive.js to your own path to my_tree_template.html </h2>

That is, go and open _my_tree_directive.js_ and find ~~~ templateUrl : '/my_tree_directive/my_tree_template.html' ~~~. Replace this url with your own path to _my_tree_template.html_.

Note : Do not forgot to add ~~~"myTreeApp"~~ to your module.

For example,
~~~
var app = angular.module("myApp", ["myTreeApp"]);
~~~

Thats all !!!

Now you can use ~~~<mytree> </mytree>~~~ directive to create data tree.

# How to configure your directive

Example :
~~~
<mytree source-data="tableData" search-text="searchTreeTxt" page-size="pageSize" expand-all="expandAll"></mytree>
~~~

<h2> Attributes of mytree element </h2>
<p>
 ~~~source-data~~~ - specify your scope object to this attrubte. This will be the data of the tree.
</p>

<p>
~~~search-text~~~ - specify your search text model here.
</p>

<p>
~~~page-size~~~ - size of each page. That is how many elements per page. Not it is not specify directly, you need to use a scope object as this attrubtue's value and this scope object contain number.
</p>

<p>
~~~ expand-all ~~~ - This should point to a scope object which should be a boolean value.
</p>

<h2> Values of attributes in mytree element </h2>

Here, 
<p>
	~~~tableData~~~ is the scope object which hold your data source.
Example for tableData;
~~~
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
~~~

in your controller.
</p>
<p>
~~~searchTreeTxt~~~ is your scope object which contain search text.
Example,
~~~
<!--Tree search box-->
                    <input id="searchableBox" results="5" type="search" class="form-control" ng-model="searchTreeTxt" placeholder="Search tree"  />
~~~
</p>
<p>
~~~pageSize~~~ is the root elements per page for pagination.
for example 
~~~
$scope.pageSize = 10;
~~~
</p>
<p>
~~~ expandAll ~~~ is a boolean value. Change in this variable will expand or collapse all branches in the tree.
</p>
