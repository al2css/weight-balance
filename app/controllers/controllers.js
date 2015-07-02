WeightBalanceApp.controller('HomeCtrl', ['$scope', '$location',
    function($scope, $location) {
        this.title = 'Home';

        console.log(' THIS IS HOME CONTROLLER: ', this);

        init();

        function init() {
            // AircraftRotation.list(function(data) {
            //        $scope.rotations = data;
            //        console.log($scope.rotations);
            //    });

        };

        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "current";
            } else {
                return "";
            }
        };

    }
]);

WeightBalanceApp.controller('LoginCtrl', ['$scope', '$location',
    function($scope, $location) {
        this.title = 'Login';
        this.user = '';

        console.log(' THIS IS LOGIN CONTROLLER: ', this);

        $scope.changeView = function(view) {
            $location.path(view); // path, not hash
        };

        $scope.logIn = function(user) {

            $scope.changeView('my-flights');

        };

    }
]);

WeightBalanceApp.controller('FlightCtrl', ['$scope', '$location', '$routeParams', 'FlightFactory',
    function($scope, $location, $routeParams, FlightFactory) {
        this.title = 'This flight page';
        this.reqFlight = {};

        console.log(' THIS IS FLIGHT! CONTROLLER: ', this);

        var getFlight = FlightFactory.getFlight($routeParams);
        if (getFlight) {
            getFlight.then(angular.bind(this, function(response) {
                FlightFactory.reqFlight = response;
                this.reqFlight = FlightFactory.reqFlight;
                // $scope.$parent.email.title = this.message.subject;
            }));
        }

    }
]);

WeightBalanceApp.controller('FlightsCtrl', ['$scope', '$location', 'FlightsFactory',
    function($scope, $location, FlightsFactory) {
        this.title = 'Flights page!';
        this.flights = {};
        this.hours = 24;
        this.date = new Date();
        this.myWorkingHours = [];
        this.dayOfWeek = this.date.getDay();
        this.currentHour = this.date.getHours();
        this.timespanWidth = parseFloat(100 / this.hours).toFixed(3);

        var allHours = [];
        var todayHours = [];
        var tomorrowHours = [];

        console.log(' THIS IS FLIGHTS CONTROLLER: ', this);

        FlightsFactory.getFlights()
            .then(angular.bind(this, function then() {
                this.flights = FlightsFactory.flights;
            }));

        $scope.setFlightToMinutes = function(timestamp) {
            var flightDate = new Date(timestamp * 1000);
            var flightHours = flightDate.getHours();
            var flightMinutes = flightDate.getMinutes();
            var minutesOffset = parseFloat(flightMinutes * 100 / 60).toFixed(3); // percent of current minutes within 60 minutes, for moving flight item inside hour timespan

            return {
                left: minutesOffset + '%'
            }
        };

        $scope.goToFlight = function(id, checkinOpen) {
            FlightsFactory.goToFlight(id, checkinOpen);
        };

        $scope.addToMyFlights = function(obj, type) {
            FlightsFactory.addToMyFlights(obj, type);
        };

        $scope.removeFlight = function(obj, from) {
            FlightsFactory.removeFlight(obj, from);

        };

        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "current";
            } else {
                return "";
            }
        };

        // build 24hours roadmap starting with current hour
        for (var i = 0; i < this.hours; i++) {
            allHours.push(i);
        };

        for (var i = this.currentHour; i < this.hours; i++) {
            todayHours.push(i);
        };

        $.each(allHours, function(key) {
            if (-1 === todayHours.indexOf(key)) {
                tomorrowHours.push(key);
            }
        });

        this.myWorkingHours = todayHours.concat(tomorrowHours);

    }
]);

WeightBalanceApp.controller('InboxCtrl', ['$scope', '$location', 'InboxFactory',
    function($scope, $location, InboxFactory) {
        this.title = 'Inbox';
        this.messages = {};

        console.log(' THIS IS INBOX CONTROLLER: ', this);

        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "current";
            } else {
                return "";
            }
        };

    }
]);


WeightBalanceApp.controller('EmailCtrl', ['$scope', '$location', 'InboxFactory',
    function($scope, $location, InboxFactory) {
        this.title = 'Email read';
        this.email = {};

        console.log(' THIS IS EMAIL CONTROLLER: ', this);

        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "current";
            } else {
                return "";
            }
        };

    }
]);


WeightBalanceApp.controller('NotificationsCtrl', ['$scope', '$location',
    function($scope, $location) {
        this.title = 'Notifications';
        this.notifications = {};

        console.log(' THIS IS NOTIFICATIONS CONTROLLER: ', this);

        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "current";
            } else {
                return "";
            }
        };

    }
]);
