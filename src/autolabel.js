/** @jsx React.DOM */
var React = require('react');

var AutoLabel = React.createClass({
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

  render: function() {
    return <span>{this.state.value}</span>
  }
});

module.exports = AutoLabel;