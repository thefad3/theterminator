/**
 * Created by Chris on 2/20/2015.
 */
angular.module("termController", ["firebase"])
    .controller("btnController", function ($scope, $firebase) {

        var ref = new Firebase("https://robotmovement.firebaseio.com");
        var fb = $firebase(ref);

        var syncObj = fb.$asObject();

        syncObj.$bindTo($scope, "movement");


    });