app.controller('logoutCtrl', function ($scope, $window, $auth) {

    $scope.logout = function () {
        $auth.logout();
        delete $window.localStorage.currentUser;
    };

});