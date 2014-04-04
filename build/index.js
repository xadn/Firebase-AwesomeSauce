(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */var myDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');

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


  function Character(x, y, name) {"use strict";
    this.x = x;
    this.y = y;
  }
  Character.prototype.attack=function(character) {"use strict";
    console.log('attacking', character);
  };


console.log('hello world');
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5keS9jb2RlL0F3ZXNvbWVTYXVjZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FuZHkvY29kZS9Bd2Vzb21lU2F1Y2Uvc3JjL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL3ZhciBteURhdGFSZWYgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vZHltY3ZsMmt3ZXIuZmlyZWJhc2Vpby1kZW1vLmNvbS8nKTtcblxuJCgnI21lc3NhZ2VJbnB1dCcpLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICB2YXIgbmFtZSA9ICQoJyNuYW1lSW5wdXQnKS52YWwoKTtcbiAgICB2YXIgdGV4dCA9ICQoJyNtZXNzYWdlSW5wdXQnKS52YWwoKTtcbiAgICBteURhdGFSZWYucHVzaCh7bmFtZTogbmFtZSwgdGV4dDogdGV4dH0pO1xuICAgICQoJyNtZXNzYWdlSW5wdXQnKS52YWwoJycpO1xuICB9XG59KTtcblxubXlEYXRhUmVmLm9uKCdjaGlsZF9hZGRlZCcsIGZ1bmN0aW9uKHNuYXBzaG90KSB7XG4gIHZhciBtZXNzYWdlID0gc25hcHNob3QudmFsKCk7XG4gIGRpc3BsYXlDaGF0TWVzc2FnZShtZXNzYWdlLm5hbWUsIG1lc3NhZ2UudGV4dCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheUNoYXRNZXNzYWdlKG5hbWUsIHRleHQpIHtcbiAgJCgnPGRpdi8+JykudGV4dCh0ZXh0KS5wcmVwZW5kKCQoJzxlbS8+JykudGV4dChuYW1lKyc6ICcpKS5hcHBlbmRUbygkKCcjbWVzc2FnZXNEaXYnKSk7XG4gICQoJyNtZXNzYWdlc0RpdicpWzBdLnNjcm9sbFRvcCA9ICQoJyNtZXNzYWdlc0RpdicpWzBdLnNjcm9sbEhlaWdodDtcbn1cblxuXG4gIGZ1bmN0aW9uIENoYXJhY3Rlcih4LCB5LCBuYW1lKSB7XCJ1c2Ugc3RyaWN0XCI7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG4gIENoYXJhY3Rlci5wcm90b3R5cGUuYXR0YWNrPWZ1bmN0aW9uKGNoYXJhY3Rlcikge1widXNlIHN0cmljdFwiO1xuICAgIGNvbnNvbGUubG9nKCdhdHRhY2tpbmcnLCBjaGFyYWN0ZXIpO1xuICB9O1xuXG5cbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpOyJdfQ==
