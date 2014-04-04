var myDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');

$('#messageInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myDataRef.push({name: name, text: text});
    $('#messageInput').val('');
  }
});

myDataRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  displayChatMessage(message.name, message.text);
});

function displayChatMessage(name, text) {
  $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
}

class Character {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
  }
  attack(character) {
    console.log('attacking', character);
  }
}

console.log('hello world');