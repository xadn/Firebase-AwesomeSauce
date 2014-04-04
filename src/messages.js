/** @jsx React.DOM */
var _ = require('lodash'),
    React = require('react'),
    Message = require('./message'),
    NewMessage = require('./new_message');

var Messages = React.createClass({
  getInitialState: function() {
    return { messages: [] };
  },

  componentWillMount: function() {
    this.props.dataRef.on('child_added', snapshot => {
      this.state.messages.push(snapshot);
      this.forceUpdate();
    });
  },

  addMessage: function(message) {
    this.props.dataRef.push(message);
  },

  render: function() {
    return (
      <div>
        {_.map(this.state.messages, function(message) {
          return <Message key={message.name()} messageRef={message.ref()} />
        })}
        <NewMessage onSubmit={this.addMessage} />
      </div>
    );
  }
});

module.exports = Messages;