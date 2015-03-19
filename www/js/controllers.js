angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Questions) {

	$scope.questions = Questions.all();

})
.controller('HomeCtrl', function($scope, Feedbacks, Locations) {
  $scope.feedbacks = Feedbacks.latest();
  for (var i =0; i<$scope.feedbacks.length; i++) {
  	var feed = $scope.feedbacks[i];
  	var loc = Locations.findById(feed.locationId);
  	feed.location = loc;

  }

  $scope.remove = function(feed) {
    Feedbacks.remove(feed);
  }

})
.controller('FeedbackCtrl', function($scope, $stateParams, Feedbacks,Locations, Questions) {

	var feedId = $stateParams.feedbackId;
	$scope.questions = Questions.all();

	$scope.locations = Locations.all();

	$scope.feed = {id : null,
      		locationId : null, 
      		feedback : []};

	if (feedId) {
		$scope.feed = Feedbacks.findById(feedId);
		
	} 

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
