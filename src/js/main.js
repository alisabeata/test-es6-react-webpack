import '../stylus/common.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import {articles} from './fixtures';


ReactDOM.render(
  <List articles = {articles} />,
  document.querySelector('.container')
);