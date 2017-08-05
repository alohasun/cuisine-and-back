var app=angular.module("cuisine",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
			$routeProvider
			.when("/",{
					templateUrl:"main/main.template.html",
					controller:'MainCtrl'
			})
			.when("/main",{
					templateUrl:"main/main.template.html"
			})
			.when('/features',{
					templateUrl:"features/features.template.html"
			})
			.when('/works',{
					templateUrl:"works/works.template.html"
			})
			.when('/cities',{
					templateUrl:"cities/cities.template.html"
			})
			.when('/plans',{
					templateUrl:"plans/plans.template.html"
			})
				}]);
app.controller('MainCtrl',[function(){
	console.log("This is the MainCtrl");
}]);