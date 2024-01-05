var app = angular.module("myApp", []);

app.controller("projects", function($scope) {
    $scope.application = [
    	{
    		name: 'ItineratR',
    		img: './Assets/itineratr.jpg',
    		info: 'IteneratR takes in your budget, travel dates, and your departing location, and then using machine learning algorithms it generates a list of cool places you would be able to visit in that budget (all expenses included). Then, when you select a place, it will display an automatically generated Itinerary. This itinerary would include everything from your meals to the the points of interests in that area.',
			mouseover: false,
			link: 'https://devpost.com/software/itenaratr'    	
    	},
    	{
    		name: 'Celeb Finder',
    		img: './Assets/celebfinder.jpg',
    		info: 'CelebFinder easily spots and recoginzes the celebrities on your webpage just by facial recognition. It even pulls up an introduction about the person.',
    		mouseover: false,
			link: 'https://devpost.com/software/celebfinder'
    	},
    	{
    		name: 'Glass Half Empty',
    		img: './Assets/glasshalfempty.jpg',
    		info: 'GlassHalfEmpty is an app that sends you an SMS alert when your bottle/glass is full. It also tells you the percentage of contamination of your water, if it gets dangerously high. The best part is that the use of this app is not only restricted to small glasses, bottles or cups.',
			mouseover: false,
			link: 'https://devpost.com/software/glass-half-empty'    	
    	},
    	{
    		name: 'Sinless',
    		img: './Assets/sinless.jpg',
    		info: 'Makes you a better person by punishing you when not doing well, rewarding otherwise. So, first of all, you have to pledge a particular amount to the app. After that, if you do something rewarding, the app would automatically send some of your money back to you. But if you do something punishable or if you are unable to complete the task you set for yourself, more money will be deducted from your account. Now, how cool is that?',
    		mouseover: false,
			link: 'https://devpost.com/software/sinless'
    	},
    	{
    		name: 'Counsl.me',
    		img: './Assets/counslme.jpg',
    		info: 'This web app allows people to communicate in real time with professionals from everywhere in the world and get people the help they need!',
    		mouseover: false,
			link: 'https://devpost.com/software/counslr-me'
    	},
    	{
    		name: 'VGrep',
    		img: './Assets/vgrep.jpg',
    		info: 'vgrep is an astonishingly easy to use Android application that provides you with notes to accompany your video lecture. You can also skip to parts of the video you want to rewatch by clicking the respective note segment. This way you don\'t have to watch the whole video again or struggle finding the parts you want to relearn - vgrep saves you the hassle!',
    		mouseover: false,
			link: 'https://devpost.com/software/vgrep'
    	}
    ];

    $scope.toggleModal = false;

    $scope.close = function(index){
    	$scope.application[index].mouseover = false;
    }

    $scope.toggle = function(index){
    	$scope.application[index].mouseover = !$scope.application[index].mouseover;
    }

	$scope.getAge = function() {
		console.log("IN DATE")
		var birthday = new Date(2003, 2, 8);
		var currDate = new Date();
		var diff = birthday.getTime() - currDate.getTime();
   		return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	}

});

app.controller("personal-info", function($scope) {

	$scope.getAge = function() {
		var birthday = new Date(2003, 2, 8);
		var currDate = new Date();
		var diff = currDate.getTime() - birthday.getTime();
   		return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	}

});

app.directive('project',function(){
	return {
		restrict: 'E',
		templateUrl: './html/project-modal.html'
	};
});