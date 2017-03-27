import React, { Component } from 'react';

import LifeBoard from './life-board';
import LifeControls from './life-controls';

class LifeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      cols: null,
      rows: null,
      generation: null,
      boardStatus: null,
    };
  }

  // LIFECYCLE METHODS

  componentWillMount() {
    this.generateBoard(24, 36);
    this.setGenerationInterval();
  }

  componentWillUnmount() {
    this.clearGenerationInterval();
  }

  // METHODS FOR GENERATION INTERVAL MANAGEMENT

  clearGenerationInterval() {
    clearTimeout(this.generationInterval);
  }

  setGenerationInterval() {
    this.generationInterval = setInterval(this.getNextGeneration.bind(this), 400);
  }

  // METHODS FOR BOARD HANDLING

  generateBoard(x, y) {
    const isLandscape = (window.innerHeight > window.innerWidth);
    const cols = (isLandscape ? x : y);
    const rows = (isLandscape ? y : x);
    let board = this.generateRandomBoard(cols, rows);
    // cols, rows could be calculated by board stored in two-dimensial array:
    // row: length of outer array
    // col: length of inner array
    this.setState({
      board: board,
      cols: cols,
      rows: rows,
      generation: 1,
      gameStatus: 'started',
    });
  }

  generateRandomBoard(cols, rows) {
    let board = new Array();
    for (let i = 0; i < rows; i++) {
      let row = new Array();
      for (let j = 0; j < cols; j++) {
        const cellStatus = Math.random() > 0.65 ? 1 : 0;
        row[j] = cellStatus;
      }
      board.push(row);
    }
    return board;    
  }

  getNextGeneration() {
    const { cols, rows } = this.state;
    let currentBoard = this.state.board;
    let nextBoard = new Array();
    
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
      }
    }

    this.setState({
      board: nextBoard,
      generation: this.state.generation + 1,
    });
  }

  // METHODS FOR USER INTERACTION EVENT HANDLING

  handleContinueGame() {
    this.setState({
      gameStatus: 'started',
    });
    this.setGenerationInterval();
  }

  handleInputLifeCell(cell) {
    const coords = cell.split('-');
    const newBoard = this.state.board;
    newBoard[coords[0]][coords[1]] = 1;
    this.setState({
      board: newBoard
    });
  }

  handlePauseGame() {
    this.clearGenerationInterval();
    this.setState({
      gameStatus: 'paused'
    });
  }

  handleResetGame() {
    const { cols, rows } = this.state;
    const newBoard = new Array();
    for (let i = 0; i < rows; i++) {
      let row = new Array();
      for (let j = 0; j < cols; j++) {
        row[j] = 0;
      }
      newBoard.push(row);
    }
    this.clearGenerationInterval();
    this.setState({
      board: newBoard,
      generation: null,
      gameStatus: 'stopped',
    });
  }

  handleStartGame() {
    this.setState({
      gameStatus: 'started',
    });
    this.setGenerationInterval();
  }

  handleStartRandomGame() {
    const { cols, rows } = this.state;
    let board = this.generateRandomBoard(cols, rows);
    this.setState({
      board: board,
      generation: 1,
      gameStatus: 'random-setup',
    });
  }


  // RENDER METHODS

  render() {
    const { board, gameStatus, generation } = this.state;

    return (
      <div className="life-game">
        <h1 className="text-center mt-2">Life</h1>
        <LifeControls
          gameStatus={gameStatus}
          generation={generation}
          onContinueGame={() => this.handleContinueGame()}
          onPauseGame={() => this.handlePauseGame()}
          onResetGame={() => this.handleResetGame()}
          onStartGame={() => this.handleStartGame()}
          onStartRandomGame={() => this.handleStartRandomGame()}
        />
        <LifeBoard
          board={board}
          onInputLifeCell={(cell) => this.handleInputLifeCell(cell)}
        />
      </div>
    );
  }

};

export default LifeGame;
