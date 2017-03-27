import React from 'react';

import LifeRow from './life-row';

const LifeBoard = (props) => {
  const { board, onInputLifeCell } = props;

  const renderRow = (row, index) => {
    return (
      <LifeRow
        id={'row-' + index}
        key={'row-' + index}
        row={index}
        lifeData={row}
        onInputLifeCell={onInputLifeCell}
      />
    );
  }

  return (
    <div className="life-board">
      {board.map((row, index) => renderRow(row, index))}
    </div>
  );
}

export default LifeBoard;
