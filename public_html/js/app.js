   
var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.
    when('/',{
    templateUrl : "main.html"   
    }).
    when('/new',{
    templateUrl : "new.html",
    controller : "newCtrl"
    }).
    when('/edit',{
    templateUrl : "edit.html",
    controller  : "editCtrl"
    }).
    when('/search',{
    templateUrl : "search.html",
    controller  : "searchCtrl"  
    }).
    otherwise({
    redirectTo: '/'
    });
    });
    
   var itemList=[];  
   app.controller("newCtrl", function($scope) {
        $scope.status="Here you can add new products!";                        
        $scope.addItem=function(){                  
            itemList.push(angular.copy($scope.item));           
            $scope.status="Added items:"+itemList.length;
        }
        $scope.listItem=function(){             
           $scope.itemList=itemList;         
        }
        
   });
   app.controller("editCtrl", function($scope) {
   $scope.status="Here you can edit products";
   });
   app.controller("searchCtrl", function($scope) {
   $scope.status="Here you can search products";
   });