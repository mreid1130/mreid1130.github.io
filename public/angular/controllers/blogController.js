angular.module('blogController', [])

.controller('BlogCtrl', ['$scope', function($scope){

	$scope.allBlogPosts = [
						{
							path: './blog/post-dbc-reflection.html',
							title: 'Post DBC Reflection',
							date: 'Feb. 26, 2015'
						},
						{
							path: './blog/c8-questions.html',
							title: 'The Art of a Good Question',
							date: 'Nov. 14, 2014'
						},
						{
							path: './blog/c3-tech-issues.html',
							title: 'Underrepresentation in the Tech Industry',
							date: 'Oct. 8, 2014'
						},
						{
							path: './blog/c2-thinking-style.html',
							title: "My Learning Style and DBC",
							date: 'Oct. 5, 2014'
						},
						{
							path: './blog/t2-css-design.html',
							title: 'Inline, Blocks, and Inline-block',
							date: 'Sep. 24, 2014'
						},
						{
							path: './blog/t1-git-blog.html',
							title: 'Version Control 101',
							date: 'Sep. 17, 2014'
						},
						{
							path: './blog/c1-chefs-kitchen.html',
							title: 'Kitchen vs. Restaurant',
							date: 'Sep. 17, 2014'
						}
					  ]

	$scope.blogPostPath = $scope.allBlogPosts[0].path

	$scope.selectBlogPost = function(blogpath){
		$scope.blogPostPath = blogpath
	}

}])