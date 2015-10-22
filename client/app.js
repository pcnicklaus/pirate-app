var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function ($routeProvider, $authProvider, $locationProvider) {

    //     *** satellizer settings *** //
    //     $authProvider.loginOnSignup = false;
    //     $authProvider.loginRedirect = '/home';
    //     $authProvider.signupRedirect = '/login';
    $routeProvider
        .when('/', {
            templateUrl: 'partials/welcome.html'
        })
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        })
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'signupCtrl'
        })
        .when('/logout', {
            controller: 'logoutCtrl',
            template: '<h1>logged out beeeeotch</h1>'
        })
        .otherwise('/');

});