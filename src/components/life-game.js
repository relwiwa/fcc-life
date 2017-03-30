import React, { Component } from 'react';

import LifeBoard from './life-board/life-board';
import LifeControls from './life-controls';
import LifeInstructions from './life-instructions/life-instructions';

const boardDimensions = {
  clusterSize: 5,
  cols: 35,
  rows: 25
};

class LifeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      cols: null,
      rows: null,
      generationCount: null,
      boardStatus: null,
      instructionsDisplayed: true,
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
      cols: cols,
      rows: rows,
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

  handleToggleLifeCell(cell) {
    const coords = cell.split('-');
    const newBoard = this.state.board;
    newBoard[coords[0]][coords[1]] = this.state.board[coords[0]][coords[1]] === 1 ? 0 : 1;
    this.setState({
      board: newBoard
    });
  }

  handleNextGeneration(nextGeneration) {
    this.setState({
      board: nextGeneration,
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
    const { cols, rows } = this.state;
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
    const { cols, rows } = this.state;
    let board = this.generateRandomBoard(cols, rows);
    this.setState({
      board: board,
      generation: 1,
      gameStatus: 'random-setup',
    });
  }

  handleToggleInstructionsDisplay() {
    this.setState({
      instructionsDisplayed: !this.state.instructionsDisplayed
    });
  }

  // RENDER METHODS

  render() {
    const { board, gameStatus, generation } = this.state;

    return (
      <div className="life-game">
        <h1 className="text-center mt-2">
          Life&nbsp;
          <i
            className="fa fa-question-circle-o text-muted"
            onClick={() => this.handleToggleInstructionsDisplay()}
          ></i>
        </h1>
        {this.state.instructionsDisplayed &&
          <LifeInstructions
            onToggleInstructionsDisplay={() => this.handleToggleInstructionsDisplay()}
          />
        }
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
          onNextGeneration={(nextGeneration) => this.handleNextGeneration(nextGeneration)}
          onToggleLifeCell={(cell) => this.handleToggleLifeCell(cell)}
          clusterSize={boardDimensions.clusterSize}
          ref={(boardRef) => {this.boardRef = boardRef}}
        />
      </div>
    );
  }

};

export default LifeGame;
