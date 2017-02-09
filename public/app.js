(function(){
  var config = {
      apiKey: "AIzaSyBaqdYyBC4wGaMlxZ1LnCGy5viWWgND8ME",
      authDomain: "test-62660.firebaseapp.com",
      databaseURL: "https://test-62660.firebaseio.com",
      storageBucket: "test-62660.appspot.com",
      messagingSenderId: "218420957379"
    };
  firebase.initializeApp(config);

  angular.module('app', ['firebase'])
  .controller('MyCtrl', function($firebaseObject){
      const rootRef = firebase.database().ref().child('angular');
      const ref = rootRef.child('object');
      this.object = $firebaseObject(ref);
  })
})
