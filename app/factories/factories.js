/**
 * Factory: InboxFactory
 */
angular.module('WeightBalanceApp')
    .factory('InboxFactory', ['$q', '$http', '$location', function InboxFactory($q, $http, $location) {
        'use strict';
        var exports = {};
        exports.messages = {};
        exports.unreadMessages = {};
        exports.notifications = {};

        exports.goToMessage = function(id) {
            if (angular.isNumber(id)) {
                $location.path('inbox/email/' + id)
            }
        }

        exports.deleteMessage = function(id, index) {
            this.messages.splice(index, 1);
            // exports.getNrMessages();
            console.log('mess nr:  ', exports.messages.length);
        }

        exports.getMessages = function() {
            // Get all messages in inbox page
            var deferred = $q.defer();
            return $http.get('app/json/emails.json')
                .success(function(data) {
                    exports.messages = data;
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };

        exports.getUnreadMessages = function() {
            // Get unread unreadMessages in every page
            var deferred = $q.defer();
            return $http.get('app/json/emails.json')
                .success(function(data) {
                    exports.unreadMessages = data;
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;

        };

        exports.getNotifications = function() {
            // Get all notifications every page
            var deferred = $q.defer();
            return $http.get('app/json/notifications.json')
                .success(function(data) {
                    exports.notifications = data;
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };

        exports.getNrMessages = function() {
            return exports.messages.length;
        };

        return exports;
    }]);


/**
 * Factory: EmailFactory
 */
angular.module('WeightBalanceApp')
    .factory('EmailFactory', ['$q', '$http', '$routeParams', function EmailFactory($q, $http, $routeParams) {
        'use strict';
        var exports = {};
        exports.messages = {};

        exports.reply = function(message) {
            if (message) {
                // we would obviously hit the back-end here
                // but let's just alert what we've typed
                alert('Reply content: ' + message);
            }
        };

        exports.getMessage = function(params) {
            if (params.id) {
                var deferred = $q.defer();
                $http.get('app/json/message/' + params.id + '.json')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };

        return exports;
    }]);


/**
 * Factory: FlightsFactory
 * All flights 
 */
angular.module('WeightBalanceApp')
    .factory('FlightsFactory', ['$q', '$http', '$routeParams', '$location', function FlightsFactory($q, $http, $routeParams, $location) {
        'use strict';
        var exports = {};
        exports.flights = {};

        exports.changeView = function(view) {
            $location.path(view); // path, not hash
        };

        exports.goToFlight = function(id, checkinOpen) {
            if (angular.isNumber(id) && checkinOpen) {
                exports.changeView('flights/' + id);
            }
        };

        exports.addToMyFlights = function(obj, parent) {
            // parent - needed for obj removal
            // obj - needed for adding to assigned_flights
            if (!angular.isUndefined(obj.id) && angular.isNumber(obj.id)) {
                var departingTime = obj.departing_time * 1000;
                // var currentTime = new Date().getTime(); // current time in miliseconds
                var currentTime = exports.flights.login_date * 1000; // for testing purposes!!!
                var isNr = angular.isNumber(departingTime) && angular.isNumber(currentTime);

                console.log(' Departing Time: ', departingTime, new Date(departingTime))
                console.log(' Now: ', currentTime, new Date(currentTime))

                // prevent to add flights in the passed hours/days
                if (isNr && departingTime >= currentTime) {
                    exports.flights.assigned_flights.push(obj); // Push this flight object into assigned_flights Array

                    console.log(' My dashboard / dashboard length: ', exports.flights.assigned_flights.length, exports.flights.assigned_flights);

                    exports.removeFlight(obj, parent); // Remove the added obj from available list
                } else {
                    alert('This flight was at ' + new Date(departingTime) + ', and now is ' + new Date(currentTime) + '!');
                    return false;
                }

            }
        };

        // remove flight from available list / closest list / dashboard
        exports.removeFlight = function(obj, removeFrom) {
            if (!angular.isUndefined(obj)) {
                console.log('deleted item: ', obj);
                removeFrom.splice(removeFrom.indexOf(obj), 1);
            }
        };

        // remove flight from my dashboard / timespan
        // exports.removeFlightFromDashboard = function(obj) {
        //     if (!angular.isUndefined(obj)) {
        //         exports.flights.assigned_flights.splice(exports.flights.assigned_flights.indexOf(obj), 1);
        //         // console.log(exports.flights.assigned_flights, exports.flights.assigned_flights.length);
        //     }
        // }

        exports.getFlights = function(params) {
            var deferred = $q.defer();
            return $http.get('app/json/flights.json')
                .success(function(data) {
                    exports.flights = data;
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };

        return exports;
    }]);


/**
 * Factory: FlightFactory
 * One flight details
 */
angular.module('WeightBalanceApp')
    .factory('FlightFactory', ['$q', '$http', '$routeParams', '$location', function FlightFactory($q, $http, $routeParams, $location) {
        'use strict';
        var exports = {};
        exports.flight = {};

        exports.changeView = function(view) {
            $location.path(view); // path, not hash
        };

        exports.px2InchRatio = function(px, inch) {
            if (!angular.isUndefined(inch) && angular.isNumber(inch)) {
                return parseFloat(px / inch).toFixed(3);
            }
        };

        exports.getFlight = function(params) {
            if (params.id) {
                var deferred = $q.defer();
                $http.get('app/json/flight/flightID' + params.id + '.json')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };

        return exports;
    }]);
