import React from 'react';
import { render } from 'react-dom';
import LifeGame from './components/life-game';
import styles from '../styles/style.scss';

render(
  <LifeGame />,
  document.getElementById('root')
);
