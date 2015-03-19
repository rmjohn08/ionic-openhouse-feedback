angular.module('starter.services', [])
.factory('Feedbacks', function()  {

    var Feedbacks = [{
      id : 1,
      locationId : 1, 
      feedback : [{questionId:1,score:2},
                  {questionId:2,score:3},
                  {questionId:3,score:2},
                  {questionId:4,score:5},
                  {questionId:5,score:5}]
    },
    { 
      id : 2,
      locationId : 2, 
      feedback : [{questionId:1,score:5},
                  {questionId:2,score:5},
                  {questionId:3,score:5},
                  {questionId:4,score:3},
                  {questionId:5,score:3}]
    }];

    return {
      latest : function() {
        return Feedbacks;
      }, 
      add : function(feed) {
          Feedbacks.push(feed);
      }, 
      findById : function (id) {

        for (var i = 0; i<Feedbacks.length; i++) {
          if (Feedbacks[i].id == id ) {
            return Feedbacks[i];
          }
        }

        return null;
      }

    }
})
.factory('Locations', function() {

  var Locations = [{
    id : 1, 
    address : '1234 main st',
    address2 : '',
    city : 'Bellevue',
    zipCode : '12345',
    state : 'NE',
    imageSrc : null 
  },
  {
    id : 2, 
    address : '789 N Main Ave',
    address2 : '',
    city : 'Bellevuew',
    zipCode : '12369',
    state : 'NE',
    imageSrc : null
  },
  {
    id : 3, 
    address : '6548 S Lorem St',
    address2 : '',
    city : 'Papillion',
    zipCode : '66554',
    state : 'NE',
    imageSrc : null 
  },
  {
    id : 4, 
    address : '12365 North Branch',
    address2 : '',
    city : 'Omaha',
    zipCode : '14785',
    state : 'NE',
    imageSrc : null 
  },
  {
    id : 5, 
    address : '9874 Elk Rd',
    address2 : '',
    city : 'Kansas City',
    zipCode : '14798',
    state : 'KS',
    imageSrc : null 
  },
  {
    id : 6, 
    address : '14566 Larimore',
    address2 : '',
    city : 'Kansas City',
    zipCode : '14345',
    state : 'KS',
    imageSrc : null 
  }
  
  ];

  return {
    all : function() {
      return Locations;
    },

    findById : function(id) {

        for (var i=0; i<Locations.length; i++) {
            if (Locations[i].id == id) {
              return Locations[i];
            } 
        }

        return null;
    }

  }

})
.factory('Questions', function() {

  // static questions for feedback
  var Questions = [{
      id:1,
      question : 'Exterior',
      location : 1
  },
  {
      id:2,
      question : 'Neighborhood',
      location : 1
  },
  {
      id:3,
      question : 'Square Footage',
      location : 1
  },
  {
      id:4,
      question : 'Backyard',
      location : 1
  },
  {
      id:5,
      question : 'Kitchen',
      location : 1
  }];

  return {
    all: function() {
      return Questions;
    },
    remove: function(question) {
      Questions.splice(Questions.indexOf(question), 1);
    },
    get: function(questionId) {
      for (var i = 0; i < Questions.length; i++) {
        if (Questions[i].id === parseInt(questionId)) {
          return Questionss[i];
        }
      }
      return null;
    }
  };

})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
