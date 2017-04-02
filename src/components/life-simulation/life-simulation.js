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
      generation: null,
      population: null,
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
    let boardAndPopulation = this.generateRandomBoard(cols, rows);
    // cols, rows could be calculated by board stored in two-dimensial array:
    // row: length of outer array
    // col: length of inner array
    this.setState({
      board: boardAndPopulation.board,
      population: boardAndPopulation.population,
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
    let populationCount = 0;
    for (let i = 0; i < rows; i++) {
      let row = new Array();
      for (let j = 0; j < cols; j++) {
        const cellStatus = Math.random() > 0.65 ? 1 : 0;
        row[j] = cellStatus;
        populationCount += cellStatus;
      }
      newBoard.push(row);
    }
    return {
      board: newBoard,
      population: populationCount
    };    
  }

  // METHODS FOR USER INTERACTION EVENT HANDLING

  handleContinueGame() {
    this.setState({
      gameStatus: 'started',
    });
    this.boardRef.startGenerationInterval();
  }

  handleNextBoard(nextBoard, populationCount) {
    if (populationCount === 0) {
      this.boardRef.stopGenerationInterval();
      this.setState({
        board: nextBoard,
        population: populationCount,
        gameStatus: 'all-dead',
      });
    }
    else {
      this.setState({
        board: nextBoard,
        generation: this.state.generation + 1,
        population: populationCount,
      });      
    }
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
      population: 0,
      generation: null,
      gameStatus: 'stopped',
    });
  }

  handleStartGame() {
    if (this.state.population > 0) {
      this.setState({
        gameStatus: 'started',
        generation: 1,
      });
      this.boardRef.startGenerationInterval();
    }
  }

  handleStartRandomGame() {
    const cols = this.state.board[0].length;
    const rows = this.state.board.length;
    let boardAndPopulation = this.generateRandomBoard(cols, rows);
    this.setState({
      board: boardAndPopulation.board,
      population: boardAndPopulation.population,
      generation: 1,
      gameStatus: 'random-setup',
    });
  }

  handleToggleLifeCell(cell) {
    const { board, gameStatus, population } = this.state;
    if (gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') {
      const coords = cell.split('-');
      const newBoard = board;
      const newStatus = board[coords[0]][coords[1]] === 1 ? 0 : 1;
      newBoard[coords[0]][coords[1]] = newStatus;
      let newPopulation = population;
      newStatus === 0 ? newPopulation-- : newPopulation++;
      let newState = {};
      newState.board = newBoard;
      newState.population = newPopulation;
      this.setState({
        board: newBoard,
        population: newPopulation,
      });
    }
  }

  render() {
    const { board, gameStatus, generation, population } = this.state;
    const { instructionsDisplayed, onToggleInstructionsDisplay } = this.props;

    return (
      <div className="life-simulation mb-3">
        <LifeControls
          gameStatus={gameStatus}
          generation={generation}
          instructionsDisplayed={instructionsDisplayed}
          population={population}
          onContinueGame={() => this.handleContinueGame()}
          onPauseGame={() => this.handlePauseGame()}
          onResetGame={() => this.handleResetGame()}
          onStartGame={() => this.handleStartGame()}
          onStartRandomGame={() => this.handleStartRandomGame()}
          onToggleInstructionsDisplay={onToggleInstructionsDisplay}
        />
        <LifeBoard
          board={board}
          onNextBoard={(nextBoard, populationCount) => this.handleNextBoard(nextBoard, populationCount)}
          onToggleLifeCell={(cell) => this.handleToggleLifeCell(cell)}
          clusterSize={boardDimensions.clusterSize}
          ref={(boardRef) => {this.boardRef = boardRef}}
        />
      </div>
    );
  }
}

export default LifeSimulation;
