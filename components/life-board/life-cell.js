import React from 'react';

import '../../styles/life-cell.scss';

const LifeCell = (props) => {
  const { cellId, onToggleLifeCell, status } = props;

  const onClick = () => {
    if (onToggleLifeCell !== null) {
      onToggleLifeCell(cellId);
    }
  }

  return (
    <div className="life-cell cell auto">
      <div
        className={status === 1 ? 'populated' : 'not-populated'}
        onClick={() => onClick()}
      ></div>
    </div>
  );
}

export default LifeCell;
