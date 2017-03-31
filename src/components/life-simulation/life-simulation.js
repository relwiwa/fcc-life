import React, { Component } from 'react';

import LifeBoard from '../life-board/life-board';
import LifeControls from './life-controls';

const boardDimensions = {
  clusterSize: 5,
  cols: 35,
  rows: 25
};

class LifeSimulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      generationCount: null,
      boardStatus: null,
    };
  }

  // LIFECYCLE METHODS

  componentWillMount() {
    this.generateBoard(boardDimensions.cols, boardDimensions.rows);
  }

  componentWillUnmount() {
    this.boardRef.stopGenerationInterval();
  }

  // METHODS FOR BOARD CREATION

  generateBoard(x, y) {
    const isLandscape = (window.innerHeight < window.innerWidth);
    const cols = (isLandscape ? x : y);
    const rows = (isLandscape ? y : x);
    let board = this.generateRandomBoard(cols, rows);
    // cols, rows could be calculated by board stored in two-dimensial array:
    // row: length of outer array
    // col: length of inner array
    this.setState({
      board: board,
      generation: 1,
      gameStatus: 'started',
    });
  }

  generateEmptyBoard(cols, rows) {
    let newBoard = new Array();
    for (let i = 0; i < rows; i++) {
      let row = new Array();
      for (let j = 0; j < cols; j++) {
        row[j] = 0;
      }
      newBoard.push(row);
    }
    return newBoard;
  }

  generateRandomBoard(cols, rows) {
    let newBoard = new Array();
    for (let i = 0; i < rows; i++) {
      let row = new Array();
      for (let j = 0; j < cols; j++) {
        const cellStatus = Math.random() > 0.65 ? 1 : 0;
        row[j] = cellStatus;
      }
      newBoard.push(row);
    }
    return newBoard;    
  }

  // METHODS FOR USER INTERACTION EVENT HANDLING

  handleContinueGame() {
    this.setState({
      gameStatus: 'started',
    });
    this.boardRef.startGenerationInterval();
  }

  handleNextBoard(nextBoard) {
    this.setState({
      board: nextBoard,
      generation: this.state.generation + 1
    });
  }

  handlePauseGame() {
    this.boardRef.stopGenerationInterval();
    this.setState({
      gameStatus: 'paused'
    });
  }

  handleResetGame() {
    const { board }  = this.state;
    const cols = this.state.board[0].length;
    const rows = this.state.board.length;
    const newBoard = this.generateEmptyBoard(cols, rows);
    this.boardRef.stopGenerationInterval();
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
    this.boardRef.startGenerationInterval();
  }

  handleStartRandomGame() {
    const cols = this.state.board[0].length;
    const rows = this.state.board.length;
    let board = this.generateRandomBoard(cols, rows);
    this.setState({
      board: board,
      generation: 1,
      gameStatus: 'random-setup',
    });
  }

  handleToggleLifeCell(cell) {
    const coords = cell.split('-');
    const newBoard = this.state.board;
    newBoard[coords[0]][coords[1]] = this.state.board[coords[0]][coords[1]] === 1 ? 0 : 1;
    this.setState({
      board: newBoard
    });
  }

  render() {
    const { board, gameStatus, generation } = this.state;

    return (
      <div className="life-simulation mb-3">
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
          onNextBoard={(nextBoard) => this.handleNextBoard(nextBoard)}
          onToggleLifeCell={(cell) => this.handleToggleLifeCell(cell)}
          clusterSize={boardDimensions.clusterSize}
          ref={(boardRef) => {this.boardRef = boardRef}}
        />
      </div>
    );
  }
}

export default LifeSimulation;
