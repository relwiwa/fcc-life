import React, { Component } from 'react';

import LifeRow from './life-row';

class LifeBoard extends Component {
  constructor(props) {
    super(props);
  }

 // LIFECYCLE METHODS

  componentWillMount() {
    if (this.props.onNextBoard) {
      this.startGenerationInterval();
    }
  }

  componentWillUnmount() {
    if (this.props.onNextBoard) {
      this.stopGenerationInterval();
    }
  }

  // METHODS FOR GENERATION INTERVAL MANAGEMENT

  stopGenerationInterval() {
    clearTimeout(this.generationInterval);
  }

  startGenerationInterval() {
    this.generationInterval = setInterval(this.getNextGeneration.bind(this), 300);
  }

  // generates next generation based on the props.board
  // and returns it to parent component
  // => controlled component
  getNextGeneration() {
    const { board, onNextBoard } = this.props;
    const cols = board[0].length;
    const rows = board.length;
    let currentBoard = board;
    let nextBoard = new Array();
    let populationCount = 0;
    
    for (let currRow = 0; currRow < rows; currRow++) {
      nextBoard[currRow] = new Array();
      // handle limitations of board:
      // - currRow === 0 means this is first row, so prevRow is last row of board
      // - currRow === rows - 1 means this is last row, so nextRow is first row of board
      const prevRow = (currRow === 0) ? rows - 1 : currRow - 1;
      const nextRow = (currRow === rows - 1) ? 0 : currRow + 1;

      for (let currCol = 0; currCol < cols; currCol++) {
        // handle limitations of board as with rows
        const prevCol = (currCol === 0) ? cols - 1 : currCol - 1;
        const nextCol = (currCol === cols - 1) ? 0 : currCol + 1;

        const sum = currentBoard[prevRow][prevCol]
          + currentBoard[prevRow][currCol]
          + currentBoard[prevRow][nextCol]
          + currentBoard[currRow][prevCol]
          + currentBoard[currRow][currCol]
          + currentBoard[currRow][nextCol]
          + currentBoard[nextRow][prevCol]
          + currentBoard[nextRow][currCol]
          + currentBoard[nextRow][nextCol];

        // Determination of value of central field:
        // "To avoid decisions and branches in the counting loop, the rules can be
        //  rearranged from an egocentric approach of the inner field regarding its
        //  neighbours to a scientific observer's viewpoint: if the sum of all nine
        //  fields is 3, the inner field state for the next generation will be life
        //  (no matter of its previous contents); if the all-field sum is 4, the inner
        //  field retains its current state and every other sum sets the inner field
        //  to death."
        // from Wikipedia: https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Algorithms
        if (sum === 3) {
          nextBoard[currRow][currCol] = 1;
        }
        else if (sum === 4) {
          nextBoard[currRow][currCol] = currentBoard[currRow][currCol];
        }
        else {
          nextBoard[currRow][currCol] = 0;
        }
        populationCount += nextBoard[currRow][currCol];
      }
    }
    onNextBoard(nextBoard, populationCount);
  }

  renderRow(row, index) {
    const { clusterSize, onToggleLifeCell } = this.props;
    return (
      <LifeRow
        id={'row-' + index}
        key={'row-' + index}
        row={index}
        clusterSize={clusterSize}
        rowData={row}
        onToggleLifeCell={onToggleLifeCell ? onToggleLifeCell : null}
      />
    );
  }


  render() {
    const { board } = this.props;

    return (
      <div className="life-board">
        {board.map((row, index) => this.renderRow(row, index))}
      </div>
    );
  }
}

export default LifeBoard;
