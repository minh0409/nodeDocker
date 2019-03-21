/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Home Page' }
        })
        .state('index.leaderboard', {
            url: "/minor",
            templateUrl: "views/task.html",
            data: { pageTitle: 'Todo Task' }
        })
        .state('index.calendar', {
            url: "/calendar",
            templateUrl: "views/calendar.html",
            data: { pageTitle: 'Calendar' }
        })
        .state('index.facebook', {
            url: "/facebook",
            templateUrl: "views/facebook.html",
            data: { pageTitle: 'Facebook' }
        })
        .state('index.privacy', {
            url: "/privacy",
            templateUrl: "views/privacy.html",
            data: { pageTitle: 'Privacy' }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
