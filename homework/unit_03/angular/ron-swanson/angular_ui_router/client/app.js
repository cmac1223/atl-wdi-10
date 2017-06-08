const angular = require('angular');
require('angular-ui-router');

angular
    .module('RonSwansonApp', ['ui.router'])
    .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];    

// Set up your UI Router HERE
function uiRouterSetup($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        })
        .state('quotes', {
            url: '/quotes',
            template: '<quotes></quotes>'
        })
        $urlRouterProvider.otherwise('/');
}