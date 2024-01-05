var app = angular.module("myApp", []);

app.controller("projects", function($scope) {
    $scope.application = [
    	{
    		name: 'CampusCapture',
    		img: './Assets/campuscapture.png',
    		info: 'Campus Capture allows the user to find the necessary information by applying multiple conditions on the campus data. User can add and manipulate large datasets through asynchronous function calls. This interface allows users to gain information such as grade booster courses, best professors and low fail rate courses.',
			mouseover: false,
			link: 'https://youtu.be/ZKsdiXBnN_M'    	
    	},
    	{
    		name: 'NYC-Airbnb-Regression-Analysis',
    		img: './Assets/airbnb.png',
    		info: 'A statistical project where I conducted thorough analysis of Airbnb listings in New York City. Firstly, I performed exploratory data analysis to to obtain useful variables and their necessary transformations. Furthermore, I trained multiple regression models on our data using exhaustive search method. Finally, I validated the model using two-fold cross-validation.',
    		mouseover: false,
			link: 'https://github.com/kashish1928/NYC-Airbnb-Regression-Analysis'
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