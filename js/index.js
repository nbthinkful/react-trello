require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Surprise from './components/surprise';

document.addEventListener('DOMContentLoaded', () => {
    var lists=['No1','No2','No3'];
    ReactDOM.render(<Board title="My Board" lists={lists} />, document.getElementById('app'));
    ReactDOM.render(<Surprise/>, document.getElementById('surprise'));
})