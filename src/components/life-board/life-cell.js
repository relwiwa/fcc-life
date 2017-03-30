import React from 'react';
import Styles from '../../../styles/style.scss';

const LifeCell = (props) => {
  const { cellId, onToggleLifeCell, status } = props;

  const onClick = () => {
    if (onToggleLifeCell !== null) {
      onToggleLifeCell(cellId);
    }
  }

  return (
    <div className="col">
      <div
        className={'life-cell ' + (status === 1 ? 'bg-info' : 'bg-warning')}
        onClick={() => onClick()}
      ></div>
    </div>
  );
}

export default LifeCell;
