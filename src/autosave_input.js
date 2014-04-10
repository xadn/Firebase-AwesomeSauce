/** @jsx React.DOM */
var React = require('react'),
    goog = require('diff-match-patch'),
    dmp = new goog.diff_match_patch();

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
    var patch = dmp.patch_make(this.state.value, e.target.value);

    this.props.valueRef.transaction(function(serverValue) {
      return dmp.patch_apply(patch, serverValue)[0];
    });
  },

  render: function() {
    return <input type='text' value={this.state.value} onChange={this.sendChange} placeholder={this.props.placeholder} />
  }
});

module.exports = AutosaveInput;