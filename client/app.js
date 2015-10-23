var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function ($routeProvider, $authProvider, $locationProvider) {

    //     *** satellizer settings *** //
    //     $authProvider.loginOnSignup = false;
    //     $authProvider.loginRedirect = '/home';
    //     $authProvider.signupRedirect = '/login';
    $routeProvider
        .when('/', {
            templateUrl: 'partials/welcome.html',
            contorller: 'mainCtrl'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'mainCtrl'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'mainCtrl'
        })
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'signupCtrl'
        })
        .when('/edit', {
            templateUrl: 'partials/edit.html',
            controller: 'editCtrl'
        })
        .when('/logout', {
            controller: 'logoutCtrl'
        })
        .otherwise('/home');

});