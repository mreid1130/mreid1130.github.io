angular.module('blogController', [])

.controller('BlogCtrl', ['$scope', function($scope){
	$scope.blogInfo = [{path: './blog/post-dbc-reflection.html',
						 title: 'Post DBC Reflection',
						 date: 'Feb. 26, 2015'
						}]

	$scope.selectBlogPost = function(blogpath){
		$scope.blogPostPath = blogpath
	}

}])