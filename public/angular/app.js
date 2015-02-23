angular.module('personalSite', ['navController',
                                'projectController',
                                'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('about', {
    url           : "/about",
    templateUrl   : "angular/templates/about.html",
    controller    : 'NavCtrl'
  })

  .state('portfolio', {
    url           : "/",
    templateUrl   : "angular/templates/portfolio.html",
    controller    : 'NavCtrl'
  })

  .state('blog', {
    url           : "/blog",
    templateUrl   : "angular/templates/blog.html",
    controller    : 'NavCtrl'
  })

  $urlRouterProvider.otherwise('/');

}]);