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
    		name: 'NYC Airbnb Regression Analysis',
    		img: './Assets/airbnb.png',
    		info: 'A statistical project where I conducted thorough analysis of Airbnb listings in New York City. Firstly, I performed exploratory data analysis to to obtain useful variables and their necessary transformations. Furthermore, I trained multiple regression models on our data using exhaustive search method. Finally, I validated the model using two-fold cross-validation.',
    		mouseover: false,
			link: 'https://github.com/kashish1928/NYC-Airbnb-Regression-Analysis'
    	},
    	{
    		name: 'Fitness Tracker App',
    		img: './Assets/fittrackapp.png',
    		info: 'Fitness Tracker App is a fully finctional GUI app using basic Java libraries and Swing. It allows the users to store and view various aspects of their jogs. Additionally, it also includes an event log feature which tracks all features used by the user for an improved user experience.',
			mouseover: false,
			link: 'https://github.com/Ankur-8/FitnessTrackerApp'    	
    	},
    	{
    		name: 'Greenest City Project - A Statistical Inference',
    		img: './Assets/greencityimg.png',
    		info: 'A statistical project based on the Vancouver\'s Greenest City Action Plan (GCAP). The aim of the analysis is to select the most influential factors to improve the city\'s sustainability. I conducted a hypothesis test at 5% significance level to obtain a conclusion and proposed a future plan for the city to improve its sustainability.',
    		mouseover: false,
			link: 'https://github.com/ayushtvora/stat-201-project'
    	},
    	{
    		name: 'Library Database Management System',
    		img: './Assets/libdatabaseimg.jpeg',
    		info: 'The Library Database Management System allows a library to keep track of its books as well as help with other services such as issuing and returning of a book. It uses MySQL to create a database to store the library data and accessed the books database using python libraries and performed the necessary operations. Furthermore, it also supports multiple user accounts.',
    		mouseover: false,
			link: 'https://github.com/Ankur-8/LibraryDatabaseManagementSystem'
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