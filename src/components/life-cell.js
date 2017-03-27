import React from 'react';
import Styles from '../../styles/style.scss';

const LifeCell = (props) => {
  const { cellId, status } = props;

  return (
    <div className="col">
      <div
        className={'life-cell ' + (status === 1 ? 'bg-success' : 'bg-warning')}
      ></div>
    </div>
  );
}

export default LifeCell;
