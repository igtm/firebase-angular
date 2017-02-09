(function(){
  var config = {
      apiKey: "AIzaSyBaqdYyBC4wGaMlxZ1LnCGy5viWWgND8ME",
      authDomain: "test-62660.firebaseapp.com",
      databaseURL: "https://test-62660.firebaseio.com",
      storageBucket: "test-62660.appspot.com",
      messagingSenderId: "218420957379"
    };
  firebase.initializeApp(config);

  angular
  .module('app', ['firebase'])
  .controller('MyCtrl', function($firebaseObject, $firebaseArray, $scope){
      const rootRef = firebase.database().ref().child('angular');
      const ref = rootRef.child('object');
      const refData = rootRef.child('data');
      const refTalks = rootRef.child('talks');
      // [Object]
      // download the data into a local object
      this.object = $firebaseObject(ref);
      const syncData = $firebaseObject(refData);
       // 3 way data binding!!!!
      syncData.$bindTo($scope, "data");

      // [Array] read-only array
      // list should never be modified directly by using array methods like push() or splice()
      // Instead, AngularFire provides a set of methods compatible with manipulating synchronized arrays:
      //  $add(), $save(), and $remove()
      $scope.talks = $firebaseArray(refTalks);
      //
      $scope.addTalk = function() {
        console.log('addTalk');
        $scope.talks.$add({
          text: $scope.newTalk
        });
      };
  })
}())
