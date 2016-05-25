angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'LIGHTS ',
    face: 'img/Event1.jpg',
    Location:'UWI CaveHill Campus, Barbados',
    Date:' Sun May 29 2016 3:00pm'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/Event2.jpg',
    Location:'UWI CaveHill Campus, Barbados',
    Date:' Sun May 29 2016 3:00pm'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    Location:'UWI CaveHill Campus, Barbados',
    Date:' Sun May 29 2016 3:00pm'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    Location:'UWI CaveHill Campus, Barbados',
    Date:' Sun May 29 2016 3:00pm'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    Location:'UWI CaveHill Campus, Barbados',
    Date:' Sun May 29 2016 3:00pm'
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
