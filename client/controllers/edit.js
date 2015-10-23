app.controller('editCtrl', function ($scope, $auth, $rootScope, $window, $location, $http) {

    $scope.edit = function (id) {
        var url = 'auth/edit/' + id
        var payload = {
            email: $scope.email,
            password: $scope.password
        };

//        $auth.login(user)
    //            .then(function (response) {
    //                console.log(response);
    //                $window.localStorage.currentUser = JSON.stringify(response.data.user);
    //                $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    //                $location.path('/home');
    //            })
    //            .catch(function (response) {
    //                console.log(response);
    //            });
    //    };
    //    $scope.isAuthenticated = function () {
    //        return $auth.isAuthenticated();
    //    };

});