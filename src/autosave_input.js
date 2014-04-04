/** @jsx React.DOM */
var React = require('react');

var AutosaveInput = React.createClass({
  getInitialState: function() {
    return { value: '' };
  },

  componentWillMount: function() {
    this.props.valueRef.on('value', this.receiveChange);
  },

  componentWillUnmount: function() {
    this.props.valueRef.off('value', this.receiveChange);
  },

  receiveChange: function(snapshot) {
    this.setState({ value: snapshot.val() });
  },

  sendChange: function(e) {
    this.props.valueRef.set(e.target.value);
  },

  render: function() {
    return <input type='text' value={this.state.value} onChange={this.sendChange} placeholder={this.props.placeholder} />
  }
});

module.exports = AutosaveInput;