import React from 'react';

import LifeCell from './life-cell';

const LifeRow = (props) => {
  const { lifeData, onInputLifeCell, row } = props;

  const renderLifeRows = () => {
    const cols = lifeData.length / 6;
    let result = [];
    for (let col = 0; col < cols; col++) {
      const cellIndex = col * 6;
      result.push(
        <div
          key={'row-' + row + '-col-' + col}
          className="col"
        >
          <div className="row no-gutters">
            {renderLifeCells(cellIndex)}
          </div>
        </div>
      );
    }
    return result;
  }

  const renderLifeCells = (cellIndex)  => {
    let results = [];
    for (let cell = cellIndex; cell < cellIndex + 6; cell++) {
      results.push(
        <LifeCell
          key={row + '-' + cell}
          cellId={row + '-' + cell}
          status={lifeData[cell]}
          onInputLifeCell={onInputLifeCell}
        />
      );
    }
    return results;
  } 

  return (
    <div className="life-row row no-gutters">
      {renderLifeRows()}
    </div>
  );
}

export default LifeRow;
