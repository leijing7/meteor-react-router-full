// Client entry point, imports all client code

// import '/imports/startup/client';
// import '/imports/startup/both';
import 'weui/dist/style/weui.min.css';

import React from 'react'

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import  BasicExample from '../imports/startup/client/routes.js';

 
Meteor.startup(() => {
  render(<BasicExample />, document.getElementById('render-target'));
});

