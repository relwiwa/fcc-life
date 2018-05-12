import React from 'react';
import { render } from 'react-dom';

import '../../config/font-awesome';
import '../../global-styles.scss';

import LifeGame from './components/life-game';

render(
  <LifeGame />,
  document.getElementById('root')
);
