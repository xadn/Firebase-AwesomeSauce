/** @jsx React.DOM */
var React = require('react'),
    AutoLabel = require('./autolabel'),
    AutosaveInput = require('./autosave_input');

var Message = React.createClass({
  render: function() {
    return (
      <div>
        <AutoLabel valueRef={this.props.messageRef.child('name')} />
        <AutosaveInput type='text' placeholder='Message' valueRef={this.props.messageRef.child('text')} />
      </div>
    );
  }
});

module.exports = Message;