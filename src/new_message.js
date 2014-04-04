/** @jsx React.DOM */
var React = require('react/addons');

var NewMessage = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return { name: '', text: '' };
  },

  handleSubmit: function() {
    this.props.onSubmit({ name: this.state.name, text: this.state.text });
    this.setState({ text: '' });
    return false;
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' valueLink={this.linkState('name')} placeholder='Name' />
        <input type='text' valueLink={this.linkState('text')} placeholder='Message' />
        <input type='submit' value='Post' />
      </form>
    );
  }
});

module.exports = NewMessage;