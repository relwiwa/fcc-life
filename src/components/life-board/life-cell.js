import React from 'react';
import Styles from '../../../styles/style.scss';

const LifeCell = (props) => {
  const { cellId, onInputLifeCell, status } = props;

  const onClick = () => {
    if (onInputLifeCell !== null) {
      if (status !== 1) {
        onInputLifeCell(cellId);
      }
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
