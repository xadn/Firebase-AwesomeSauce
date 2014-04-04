var React = require('react/addons'),
    _ = require('lodash');

var myDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');

// var Message = React.createClass({
//   mixins: [React.addons.LinkedStateMixin],

//   getInitialState: function() {
//     return { name: '', text: '' };
//   },

//   handleSubmit: function() {
//     return false;
//   },

//   handleTextChange: function() {

//   },

//   render: function() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <span>Name: {this.state.name}</span>
//         <input type='text' value={this.state.text} onChange={this.handleTextChange} placeholder='Message' />
//         <input type='submit' value='Post' />
//       </form>
//     );
//   }
// });

var Messages = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return { name: '', text: '', messages: [] };
  },

  componentWillMount: function() {
    this.props.dataRef.on('value', snapshot => {
      this.setState({messages: snapshot.val()});
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
        {_.map(this.state.messages, function(message, key) {
          return <div key={key}>Name: {message.name}, Text: {message.text}</div>
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
