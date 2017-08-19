import React from 'react';
import { render } from 'react-dom';

import LifeGame from './components/life-game';
import './global-styles.scss';

render(
  <LifeGame />,
  document.getElementById('root')
);
