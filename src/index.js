var React = require('react'),
    Messages = require('./messages');
var rootDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');
React.renderComponent(Messages({dataRef: rootDataRef}), document.body);