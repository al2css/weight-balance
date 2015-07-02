/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('WeightBalanceApp')
    .directive('inbox', ['InboxFactory', function InboxDrctv(InboxFactory) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "app/directives/inbox.tmpl.html",
            controllerAs: 'viewInbox',

            controller: function() {
                this.inboxMessages = {};

                InboxFactory.getMessages()
                    .then(angular.bind(this, function then() {
                        this.inboxMessages = InboxFactory.messages;
                    }));

                console.warn('this.inboxMessages InboxDirective: ', this);

                this.goToMessage = function(id) {
                    InboxFactory.goToMessage(id);
                };

                this.deleteMessage = function(id, index) {
                    InboxFactory.deleteMessage(id, index);
                };

            },

            link: function(scope, element, attrs, ctrl) {
                /* 
                  by convention we do not $ prefix arguments to the link function
                  this is to be explicit that they have a fixed order
                */
            }
        }
    }]);



/**
 * Directive: Email <email></email>
 */
angular.module('WeightBalanceApp')
    .directive('email', ['$timeout', 'EmailFactory', '$routeParams', function EmailDrctv($timeout, EmailFactory, $routeParams) {
        'use strict';

        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "app/directives/email.tmpl.html",
            controllerAs: 'email',

            controller: function() {
                this.message = {};

                this.reply = function(message) {
                    EmailFactory.reply(message);
                };

                var getmessage = EmailFactory.getMessage($routeParams);

                if (getmessage) {
                    getmessage.then(angular.bind(this, function(response) {
                        EmailFactory.message = response;
                        this.message = EmailFactory.message;
                        // $scope.$parent.email.title = this.message.subject;
                    }));
                }

                console.warn('Email directive / Page: ', this);
            },

            link: function(scope, element, attrs, ctrl) {
                var textarea = element.find('.email__response-text')[0];
                scope.$watch('reply', function(newVal, oldVal) {
                    if (newVal === oldVal) return;
                    if (newVal) {
                        $timeout(function() {
                            textarea.focus();
                        }, 0);
                    }
                })
            }
        }
    }]);


/**
 * Directive: Roadmap <roadmap></roadmap>
 */
// angular.module('WeightBalanceApp')
//     .directive('roadmap', ['FlightsFactory', function RoadmapDrctv(FlightsFactory) {
//         'use strict';

//         return {
//             restrict: 'EA',
//             replace: true,
//             scope: true,
//             templateUrl: "app/directives/roadmap.tmpl.html",
//             controllerAs: 'roadmap',

//             controller: function() {
//                 this.flights = {};
//                 this.dayHours = 24;
//                 this.setHour = 0;
//                 this.setMinutes = 0;
//                 this.setAllMinutes = 0;
//                 this.leftOffset = 0;

//                 console.warn('this roadmap directive: ', this);

//                 FlightsFactory.getFlights()
//                     .then(angular.bind(this, function then() {
//                         this.flights = FlightsFactory.flights;
//                     }));

//                 this.goToFlight = function(id) {
//                     FlightsFactory.goToFlight(id);
//                 };

//                 this.setFlightToHour = function(timestamp) {
//                     var date = new Date(timestamp * 1000);
//                     var hours = date.getHours();
//                     var minutes = date.getMinutes();
//                     var seconds = date.getSeconds();
//                     var onlyMinutes = hours * 60 + minutes;

//                     this.setHour = hours;
//                     this.setMinutes = minutes;
//                     this.setAllMinutes = onlyMinutes;

//                     this.leftOffset = parseFloat(((100 * this.setAllMinutes) / (this.dayHours * 60))).toFixed(3);

//                     // console.warn( angular.element(document.querySelector('#gotohour' + this.setHour)).offset().left )

//                     // var formattedTime = hours + ':' + minutes.substr(minutes.length - 2) + ':' + seconds.substr(seconds.length - 2);
//                     // console.log('####date: ', date, ' ####hours: ', hours, ' ####minutes: ', minutes, '####setAllMinutes: ', this.setAllMinutes, ' ####seconds: ', seconds, ' #####this.leftOffset: ', this.leftOffset, this);

//                     return {
//                         // left: angular.element(document.querySelector('#gotohour' + (this.setHour === 0 ? 24 : this.setHour))).offset().left + 'px'
//                         left: this.leftOffset + '%'
//                     }
//                 };

//                 this.setFlightToHour2 = function(timestamp) {
//                     var flightDate = new Date(timestamp * 1000);
//                     var flightHours = flightDate.getHours();

//                     var hourOffset = angular.element(document.querySelector('#gotohour' + flightHours)).offset().left;

//                     console.warn(hourOffset)

//                     // return {
//                     //     left: hourOffset + 'px'
//                     // }
//                 };

//             },

//             link: function(scope, element, attrs, ctrl) {
//                 // console.warn(element);
//             }
//         }
//     }]);


/**
 * Directive: Timespan <timespan></timespan>
 */
// angular.module('WeightBalanceApp')
//     .directive('timespan', ['FlightsFactory', function TimespanDrctv(FlightsFactory) {
//         'use strict';

//         return {
//             restrict: 'EA',
//             replace: true,
//             scope: false, // the directive does not create a new scope, so there is no inheritance here. The directive's scope is the same scope as the parent/container. In the link function, use the first parameter (typically scope) . ///// You cannot access the scope in the directive's compile function (as mentioned here: https://github.com/angular/angular.js/wiki/Understanding-Directives). You can access the directive's scope in the link function.
//             templateUrl: "app/directives/timespan.tmpl.html",
//             controllerAs: 'timespan',

//             controller: function() {
//                 this.hours = 24;
//                 this.date = new Date();
//                 this.myWorkingHours = [];
//                 this.dayOfWeek = this.date.getDay();
//                 this.currentHour = this.date.getHours();
//                 this.timespanWidth = parseFloat(100 / this.hours).toFixed(3);
//                 this.flights = {};
//                 this.loginDate = 0;

//                 var allHours = [];
//                 var todayHours = [];
//                 var tomorrowHours = [];

//                 // FlightsFactory.getFlights()
//                 //     .then(angular.bind(this, function then() {
//                 //         this.flights = FlightsFactory.flights;
//                 //         this.loginDate = this.flights.login_date;
//                 //     }));

//                 this.goToFlight = function(id) {
//                     FlightsFactory.goToFlight(id);
//                 };

//                 this.setFlightToMinutes = function(timestamp) {
//                     var flightDate = new Date(timestamp * 1000);
//                     var flightHours = flightDate.getHours();
//                     var flightMinutes = flightDate.getMinutes();
//                     var minutesOffset = parseFloat(flightMinutes * 100 / 60).toFixed(3); // percent of current minutes within 60 minutes, for moving flight item inside hour timespan

//                     return {
//                         left: minutesOffset + '%'
//                     }
//                 };

//                 // build 24hours roadmap starting with current hour
//                 for (var i = 0; i < this.hours; i++) {
//                     allHours.push(i);
//                 };

//                 for (var i = this.currentHour; i < this.hours; i++) {
//                     todayHours.push(i);
//                 };

//                 $.each(allHours, function(key) {
//                     if (-1 === todayHours.indexOf(key)) {
//                         tomorrowHours.push(key);
//                     }
//                 });

//                 this.myWorkingHours = todayHours.concat(tomorrowHours);

//                 // this.move = function(old_index, new_index) {
//                 //     if (new_index >= this.length) {
//                 //         var k = new_index - this.length;
//                 //         while ((k--) + 1) {
//                 //             this.push(undefined);
//                 //         }
//                 //     }
//                 //     this.splice(new_index, 0, this.splice(old_index, 1)[0]);
//                 //     return this; // for testing purposes
//                 // };
//                 console.warn('timespan directive : ', this.flights);
//             },

//             link: function(scope, element, attrs, ctrl) {
//                 if (!angular.isUndefined(scope.$parent.myFlights)) {
//                     ctrl.flights = scope.$parent.myFlights.flights;
//                     console.log('aaa: ', ctrl.flights);
//                 } else if (!angular.isUndefined(scope.$parent.availableFlights)) {
//                     ctrl.flights = scope.$parent.availableFlights.flights;
//                     console.log('bbb: ', ctrl.flights);
//                 } else {
//                     return false;
//                 }
//                 ctrl.loginDate = ctrl.flights.login_date;


//                 // ctrl.flights = !angular.isUndefined(scope.$parent.myFlights) ? scope.$parent.myFlights.flights : scope.$parent.availableFlights.flights;
//                 // ctrl.loginDate = ctrl.flights.login_date;

//                 console.warn('#########: ', ctrl.flights, scope.$parent.myFlights, scope.$parent.availableFlights);

//             }
//         }
//     }]);


/**
 * Directive: Nrmess <nrmess></nrmess>
 */
angular.module('WeightBalanceApp')
    .directive('nrmess', ['InboxFactory', function NrmessDrctv(InboxFactory) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "app/directives/nrmessages.tmpl.html",
            controllerAs: 'nrmessages',

            controller: function() {
                this.unreadMessages = {};

                InboxFactory.getUnreadMessages()
                    .then(angular.bind(this, function then() {

                        angular.forEach(InboxFactory.unreadMessages, function(value, key) {
                            if (!angular.isUndefined(InboxFactory.unreadMessages[key].unread) && !InboxFactory.unreadMessages[key].unread) {
                                // keep only unread messages
                                InboxFactory.unreadMessages.splice(key, 1);
                            }
                        });

                        this.unreadMessages = InboxFactory.unreadMessages;
                    }));

                console.warn('this.unreadMessages Nr: ', this);

            },

            link: function(scope, element, attrs, ctrl) {}
        }
    }]);


/**
 * Directive: Notifications <nrnotif></nrnotif>
 */
angular.module('WeightBalanceApp')
    .directive('nrnotif', ['InboxFactory', function NrnotifDrctv(InboxFactory) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "app/directives/nrnotif.tmpl.html",
            controllerAs: 'nrnotif',

            controller: function() {
                this.notifications = {};

                InboxFactory.getNotifications()
                    .then(angular.bind(this, function then() {
                        this.notifications = InboxFactory.notifications;
                    }));

                console.warn('this.nrnotif Nr : ', this);

            },

            link: function(scope, element, attrs, ctrl) {}
        }
    }]);


/**
 * Directive: Notification <notification></notification>
 */
angular.module('WeightBalanceApp')
    .directive('notification', ['InboxFactory', function NotificationDrctv(InboxFactory) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "app/directives/notification.tpl.html",
            controllerAs: 'notificationPage',

            controller: function() {
                this.notification = {};

                InboxFactory.getNotifications()
                    .then(angular.bind(this, function then() {
                        this.notification = InboxFactory.notifications;
                    }));

                console.warn('this.notification page: ', this);

            },

            link: function(scope, element, attrs, ctrl) {}
        }
    }]);


/**
 * Directive: Lower Deck <lower-deck></lower-deck>
 */
angular.module('WeightBalanceApp')
    .directive('lowerDeck', ['FlightFactory', '$routeParams', function TimespanDrctv(FlightFactory, $routeParams) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "app/directives/lowerDeck.tmpl.html",
            controllerAs: 'lowerDeck',

            controller: function() {
                this.lowerdeck = {};
                this.fixedWidth = 1200;

                var flight = FlightFactory.getFlight($routeParams);
                if (flight) {
                    flight.then(angular.bind(this, function(response) {
                        this.lowerdeck = response.lower_deck_layout;
                        this.scaledWidth = FlightFactory.px2InchRatio(this.fixedWidth, this.lowerdeck.deckLength);
                    }));
                }

                this.setStyle = function(centroid, width, height, lateral_adjust, uld_compatibility_group) {
                    var axisPoint = parseFloat(centroid * this.scaledWidth).toFixed(3);
                    var width = parseFloat(width * this.scaledWidth).toFixed(3);
                    var height = parseFloat(height * this.scaledWidth).toFixed(3);
                    var lateralAdjust = parseFloat(lateral_adjust).toFixed(2);
                    var compatibility = uld_compatibility_group;

                    // console.log(axisPoint, width, height, compatibility);

                    switch (compatibility) {
                        // A - 88x125
                        case "A":
                            return {
                                width: width + 'px',
                                height: height + 'px',
                                right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                marginTop: parseInt(height / 2, 10) * -1 + 'px'
                            }
                            break;
                            // B - 96x125                            
                        case "B":
                            return {
                                width: width + 'px',
                                height: height + 'px',
                                right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                marginTop: parseInt(height / 2, 10) * -1 + 'px'
                            }
                            break;
                            // C - 60.4x61.5	
                        case "C":
                            if (lateralAdjust > 0) {
                                return {
                                    width: width + 'px',
                                    height: height + 'px',
                                    right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                    top: 50 + '%',
                                    marginTop: parseInt(height, 10) * -1 + 'px'
                                }
                            } else if (lateralAdjust < 0) {
                                return {
                                    width: width + 'px',
                                    height: height + 'px',
                                    right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                    bottom: 50 + '%',
                                    marginBottom: parseInt(height, 10) * -1 + 'px'
                                }
                            }
                            break;
                            // X - 61.5x60.4
                        case "X":
                            return {
                                width: width + 'px',
                                height: height + 'px',
                                right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                top: 50 + '%',
                                marginTop: parseInt(height / 2, 10) * -1 + 'px'
                            }
                            break;
                            // E - 60.4x125
                        case "E":
                            return {
                                width: width + 'px',
                                height: height + 'px',
                                right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                marginTop: parseInt(height / 2, 10) * -1 + 'px'
                            }
                            break;
                            // F - 60.4x47
                        case "F":
                            return {
                                width: width + 'px',
                                height: height + 'px',
                                right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                marginTop: parseInt(height / 2, 10) * -1 + 'px'
                            }
                            break;
                            // BULK
                        case "NA":
                            return {
                                width: width + 'px',
                                height: height + 'px',
                                right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                marginTop: parseInt(height / 2, 10) * -1 + 'px'
                            }
                            break;
                            // DOORS
                        case "Y":
                            if (lateralAdjust > 0) {
                                return {
                                    width: width + 'px',
                                    right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                    top: 0 + 'px'
                                }
                            } else if (lateralAdjust < 0) {
                                return {
                                    width: width + 'px',
                                    right: parseFloat(axisPoint - width / 2).toFixed(2) + 'px',
                                    bottom: 0 + 'px'
                                }
                            }
                            break;
                        default:
                            return false;
                    }

                };

                console.warn('lowerDeck directive : ', this);
            },

            link: function(scope, element, attrs, ctrl) {}
        }
    }]);


/**
 * Directive: ULD Elements <uld></uld>
 */
angular.module('WeightBalanceApp')
    .directive('uld', ['FlightFactory', '$routeParams', function TimespanDrctv(FlightFactory, $routeParams) {
        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: "app/directives/uldItems.tmpl.html",
            controllerAs: 'uldItems',

            controller: function() {
                this.layout = {};
                this.fixedWidth = 1200;

                var flight = FlightFactory.getFlight($routeParams);
                if (flight) {
                    flight.then(angular.bind(this, function(response) {
                        this.layout = response.lower_deck_layout;
                        this.scaledWidth = FlightFactory.px2InchRatio(this.fixedWidth, this.layout.deckLength);
                    }));
                }

                this.setStyle = function(width, height, uld_compatibility_group) {
                    var width = parseFloat(width * this.scaledWidth).toFixed(3);
                    var height = parseFloat(height * this.scaledWidth).toFixed(3);
                    var compatibility = uld_compatibility_group;

                    return {
                        width: width + 'px',
                        height: height + 'px',
                        marginTop: parseInt(height / 2, 10) * -1 + 'px'
                    };
                }

                console.warn('uld directive : ', this);
            },

            link: function(scope, element, attrs, ctrl) {}
        }
    }]);



/**
 * Directive: data-draggable
 */
angular.module('WeightBalanceApp')
    .directive('draggable', function() {
        'use strict';

        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attrs) {
                var dropTarget = $('.compatibilityClass' + attrs.draggable).not('.uld_assigned');

                // console.warn(attrs);

                element.draggable({
                    start: function() {
                        console.log('START!');
                        $('.lowerDeck').addClass('workingWith' + attrs.draggable);
                    },
                    drag: function() {
                        console.log('DRAG!');
                    },
                    stop: function() {
                        $('.lowerDeck').removeClass('workingWith' + attrs.draggable);
                        console.log('STOP!');
                    },
                    revert: function(event, ui) {
                        return !event;
                    },
                    revertDuration: 100,
                    addClasses: false,
                    opacity: 0.5,
                    scope: 'compatible' + attrs.draggable,
                    zIndex: 200,
                    cursor: "move",
                    containment: '.inside_page',
                    snap: '.centroids.compatibilityClass' + attrs.draggable,
                    snapMode: '	inner',
                    snapTolerance: 20,
                    refreshPositions: true // This solves issues on highly dynamic pages, but dramatically decreases performance.
                        // snap: dropTarget,
                });

                dropTarget.droppable({
                    // accept: element,
                    scope: 'compatible' + attrs.draggable,
                    activeClass: 'toDropHere',
                    // tolerance: 'fit',
                    drop: function(event, ui) {
                        console.log('New XHR here!!!');
                        $(this).addClass('uld_assigned');
                        // $(this).droppable('destroy');
                        $(this).droppable('disable');
                        // ui.draggable.draggable('destroy', 1);
                        ui.draggable.draggable('disable', 1);
                    }
                });
            }
        };
    });


/**
 * Directive: data-has-tipsy
 */
// angular.module('WeightBalanceApp')
//     .directive('hasTipsy', function() {
//         'use strict';

//         return {
//             restrict: 'A',
//             scope: false,
//             link: function(scope, element, attrs) {
//                 element.tipsy({
//                     gravity: 's',
//                     html: true
//                 });
//             }
//         };
//     });



/**
 * Filter: Gets an object property as a number, and returns an array
 */
angular.module('WeightBalanceApp')
    .filter('getArrayFilter', function() {
        'use strict';

        return function(input, total, preselected_length) {
            // console.log(input, total, preselected_length);
            total = ((typeof preselected_length === 'number') ? parseInt(preselected_length) : parseInt(total));
            for (var i = 0; i < total; i++) {
                input.push(i);
            }
            // console.log(input);
            return input;
        };
    });

/**
 * Filter: Gets an object property as a number, and returns an array
 */
angular.module('WeightBalanceApp')
    .filter('numberFixedLen', function() {
        return function(n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len, 10);
            if (isNaN(num) || isNaN(len)) {
                return n;
            }
            num = '' + num;
            while (num.length < len) {
                num = '0' + num;
            }
            return num;
        };
    });
