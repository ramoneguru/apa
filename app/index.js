/**
 * Entry point for APA app
 */
import React from 'react';
import ReactDOM from 'react-dom'
import Routes from './config/routes';
console.log(Routes);

ReactDOM.render(Routes, document.getElementById('app'));