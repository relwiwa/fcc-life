import React from 'react';

import LifeCell from './life-cell';

const LifeRow = (props) => {
  const { clusterSize, rowData, onToggleLifeCell, row } = props;

  const renderLifeRows = () => {
    const cols = rowData.length / clusterSize;
    let result = [];
    for (let col = 0; col < cols; col++) {
      const cellIndex = col * clusterSize;
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
    for (let cell = cellIndex; cell < cellIndex + clusterSize; cell++) {
      results.push(
        <LifeCell
          key={row + '-' + cell}
          cellId={row + '-' + cell}
          status={rowData[cell]}
          onToggleLifeCell={onToggleLifeCell}
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
