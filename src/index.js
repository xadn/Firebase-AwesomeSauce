var React = require('react'),
    Messages = require('./messages');
var rootDataRef = new Firebase('https://dymcvl2kwer.firebaseio-demo.com/');
React.renderComponent(Messages({dataRef: rootDataRef}), document.body);

// var goog = require('diff-match-patch'),
//     dmp = new goog.diff_match_patch();

// var text1 = 'Hello, World!',
//     text2 = 'Aloha, World!',
//     text3 = 'Hello, World how are you!';

// var patch = dmp.patch_make(text1, text2);
// var applied = dmp.patch_apply(patch, text3);

// console.log(applied);
