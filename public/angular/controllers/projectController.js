angular.module('projectController', [])

.controller('ProjectCtrl', ['$scope', function($scope){
	$scope.projects = [
		{
			title: 'FallSpace',
			description: "Take control of a spaceship and shoot your way through asteroids, enemies, and barriers that try and push your ship off of the screen. First part of my P10 submission at Dev Bootcamp. Built with JavaScript and jQuery.",
			github_url: 'https://github.com/mreid1130/fallaway',
			screencap_url: "http://i.imgur.com/eYFFEQT.png",
			hosted_url: "http://fallspace.herokuapp.com/fallspace"
		},
		{
			title: 'Footballurrito',
			description: "My take on the classic grow game, 'Fishy'. Play as a football player whose only job is to gobble up burritos and avoid running into other football players who are larger in size. Second half of my Phase 2 P10 Challenge with Dev Bootcamp. Built with vanilla JavaScript an jQuery. (note: found in the same GitHub repo as Fallspace)",
			github_url: 'https://github.com/mreid1130/fallaway',
			screencap_url: "http://i.imgur.com/ZqJPoTJ.png",
			hosted_url: "http://fallspace.herokuapp.com/footballurrito"
		},
		{
			title: 'UpStarter',
			description: "Upstarter gives job hunters investor-grade insight into the heated startup market, straight from a convenient hybrid mobile app. Drawing on over 90,000 startups, Upstarter rank orders top companies by a 'Momentum Score'. Factoring in fundraising history, expenditures and employee count, the Momentum Score is a startup's percentile ranking compared to similar companies. Built using the MEAN stack and the Ionic framework.",
			github_url: 'https://github.com/jgerminario/upstarter',
			screencap_url: "http://i.imgur.com/fxLDBrY.png",
			hosted_url: "http://upstarter-client.herokuapp.com"
		},
		{
			title: 'SoggyNachos',
			description: 'Not an app about soggy nachos. SoggyNachos is the temporary name for a web application that will connect developers to collaborate based on skills, interests, past projects, experience, and more. Angular client built on top of a Rails server.',
			github_url: 'https://github.com/sharmilajesupaul/soggy-nachos',
			screencap_url: "http://i.imgur.com/ddqAqcO.png",
			hosted_url: "#"
		},
		{
			title: 'ReiDevelop',
			description: "You're looking at it. Built using HTML, CSS, JavaScript, and Angular",
			github_url: 'https://github.com/mreid1130/mreid1130.github.io',
			screencap_url: "http://i.imgur.com/IaPO0XX.png",
			hosted_url: "http://mreid1130.github.io/"
		},
		{
			title: 'Event Calendar',
			description: "My submission for a coding challenge given by a potential employer to build a simple event calendar using Angular. Firebase back-end.",
			github_url: 'https://github.com/mreid1130/event_calendar_firebase',
			screencap_url: "http://i.imgur.com/tSGEgLK.png",
			hosted_url: "http://firebase-event-calendar.herokuapp.com/#/"
		}
	]
}])