// angular.module('WeightBalanceApp', [
//     'ngRoute',
//     'ngTouch',
//     'ngSanitize'
// ]).config(function($routeProvider) {

//     'use strict';

//     $routeProvider
//     // .when('/inbox', {
//     //     templateUrl: 'views/inbox.html',
//     //     controller: 'InboxCtrl',
//     //     controllerAs: 'inbox'
//     // })
//     // .when('/inbox/email/:id', {
//     //     templateUrl: 'views/email.html',
//     //     controller: 'EmailCtrl',
//     //     controllerAs: 'email'
//     // })
//         .when('/home', {
//             templateUrl: 'app/partials/_home.html',
//             controller: 'HomeCtrl',
//             controllerAs: 'home'
//         })
//         .otherwise({
//             redirectTo: '/home'
//         });
// }).run(function($rootScope) {
//     $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
//         console.log(event, current, previous, rejection)
//     })
// });



var WeightBalanceApp = angular.module('WeightBalanceApp', ['ngRoute', 'ngTouch', 'ngSanitize', 'ui.bootstrap']);

WeightBalanceApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: 'app/partials/_login.html',
                controllerAs: 'login'
            })
            .when('/my-flights', {
                controller: 'FlightsCtrl',
                templateUrl: 'app/partials/_my-flights.html',
                controllerAs: 'myFlights'
            })
            .when('/available-flights', {
                controller: 'FlightsCtrl',
                templateUrl: 'app/partials/_available-flights.html',
                controllerAs: 'myFlights'
                // controllerAs: 'availableFlights'
            })
            .when('/flights/:id', {
                controller: 'FlightCtrl',
                templateUrl: 'app/partials/_flight.html',
                controllerAs: 'flight'
            })
            .when('/home', {
                controller: 'HomeCtrl',
                templateUrl: 'app/partials/_home.html',
                controllerAs: 'home'
            })
            .when('/inbox', {
                controller: 'InboxCtrl',
                templateUrl: 'app/partials/_inbox.html',
                controllerAs: 'inbox'
            })
            .when('/inbox/email/:id', {
                controller: 'EmailCtrl',
                templateUrl: 'app/partials/_email.html',
                controllerAs: 'email'
            })
            .when('/notifications', {
                controller: 'NotificationsCtrl',
                templateUrl: 'app/partials/_notifications.html',
                controllerAs: 'notifications'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
]);
