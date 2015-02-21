// Firebase URL to teh data base
// Using only one value for "Direction"
// Controls are W,S,A,D and X for Stop
// https://clrobot.firebaseio.com/

angular.module("termController", ["firebase"])
    .controller("btnController", function runner($scope, $firebase, $window) {

        var ref = new Firebase("https://clrobot.firebaseio.com/");

        var fb = $firebase(ref);

        var syncObj = fb.$asObject();

        syncObj.$bindTo($scope, "movement");
        
        // $scope.keyTest = function($event){
        //     alert('Bitch u guessed it.');
            
        // };
        
        
        
    angular.element($window).on('keydown', function(e) {
        console.log($scope.movement.direction);
      if (e.keyCode === 38) {
        console.log("up");
        ref.set({
          direction: 'w'
        })

      }
      else if (e.keyCode === 37) {
        console.log("left");
         ref.set({
          direction: 'a'
        })
      }
      else if (e.keyCode === 39) {
        console.log("right");
         ref.set({
          direction: 'd'
        })
      }
      else if (e.keyCode === 40) {
        console.log("down");
        ref.set({
          direction: 's'
        })
      }
    });
    
    angular.element($window).on('keyup', function(e) {
        ref.set({
          direction: 'x'
        })
    });

    });
    
