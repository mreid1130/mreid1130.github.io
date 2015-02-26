angular.module('personalSite', ['navController',
                                'projectController',
                                'blogController',
                                'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('about', {
    url           : "/about",
    templateUrl   : "./public/angular/templates/about.html",
    controller    : 'NavCtrl'
  })

  .state('portfolio', {
    url           : "/",
    templateUrl   : "./public/angular/templates/portfolio.html",
    controller    : 'NavCtrl'
  })

  .state('blog', {
    url           : "/blog",
    templateUrl   : "./public/angular/templates/blog.html",
    controller    : 'NavCtrl'
  })

  $urlRouterProvider.otherwise('/');

}]);