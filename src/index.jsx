var _ = require('lodash'),
    React = require('react/addons'),
    Message = require('./message');

var myDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');

var Messages = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return { name: '', text: '', messages: [] };
  },

  componentWillMount: function() {
    this.props.dataRef.on('child_added', snapshot => {
      this.state.messages.push(snapshot);
      this.setState({ messages: this.state.messages });
    });
  },

  handleSubmit: function() {
    this.props.dataRef.push({ name: this.state.name, text: this.state.text });
    this.setState({ text: '' });
    return false;
  },

  render: function() {
    return (
      <div>
        {_.map(this.state.messages, function(message) {
          return <Message key={message.name()} messageRef={message.ref()} />
        })}
        <form onSubmit={this.handleSubmit}>
          <input type='text' valueLink={this.linkState('name')} placeholder='Name' />
          <input type='text' valueLink={this.linkState('text')} placeholder='Message' />
          <input type='submit' value='Post' />
        </form>
      </div>
    );
  }
});

React.renderComponent(<Messages dataRef={myDataRef} />, document.body);
