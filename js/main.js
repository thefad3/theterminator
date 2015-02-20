// Firebase URL to teh data base
// Using only one value for "Direction"
// Controls are W,S,A,D and X for Stop
// https://clrobot.firebaseio.com/

angular.module('theTerminator' ['firebase'])

.controller('robotControls' function($scope, $firebase){
    
    var ref = new Firebase('https://clrobot.firebaseio.com/');
    
    var refControl = ref.child('/direction/');
    
    
    
})

