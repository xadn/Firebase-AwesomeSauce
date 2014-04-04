var React = require('react/addons'),
    _ = require('lodash');

var myDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');

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

var Message = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return { name: '', text: '' };
  },

  componentWillMount: function() {
    this.props.messageRef.on('value', snapshot => {
      this.setState({ name: snapshot.val().name });
    });
  },

  handleTextChange: function(e) {
    this.props.messageRef.child('text').set(e.target.value);
  },

  render: function() {
    return (
      <div>
        <span>Name: {this.state.name}</span>
        <AutosaveInput type='text' placeholder='Name' valueRef={this.props.messageRef.child('text')} />
      </div>
    );
  }
});


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
