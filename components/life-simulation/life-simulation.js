import React, { Component } from 'react';

import LifeBoard from '../life-board/life-board';
import LifeControls from './life-controls';

import '../../styles/life-simulation.scss';

const boardDimensions = {
  large: {
    clusterSize: 5,
    cols: 35,
    rows: 25
  },
  small: {
    clusterSize: 5,
    cols: 25,
    rows: 15
  }
};

class LifeSimulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardStatus: null,
      clusterSize: null,
      generation: null,
      population: null,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  // LIFECYCLE METHODS

  componentWillMount() {
    this.setupBoard();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.boardRef.stopGenerationInterval();
    window.removeEventListener('resize', this.handleResize);
  }

  // METHODS FOR BOARD CREATION

  handleResize() {
    const currDimensions = this.getCurrentDimensions();
    if (currDimensions.cols !== this.state.board[0].length) {
      if (this.state.gameStatus === 'started') {
        this.setupBoard();
      }
      else {
        this.handleSetupRandomGame();
      }
    } 
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

  getCurrentDimensions() {
    let currDimensions = {};
    let dimension;
    const isLandscape = (window.innerHeight < window.innerWidth);
    if (isLandscape) {
      dimension = window.innerWidth < 600 ? 'small' : 'large';
      currDimensions.cols = boardDimensions[dimension].cols;
      currDimensions.rows = boardDimensions[dimension].rows;
    }
    else {
      dimension = window.innerWidth < 500 ? 'small' : 'large'; 
      currDimensions.cols = boardDimensions[dimension].rows;
      currDimensions.rows = boardDimensions[dimension].cols;
    }
    currDimensions.clusterSize = boardDimensions[dimension].clusterSize;
    return currDimensions;
  }

  setupBoard() {
    const currDimensions = this.getCurrentDimensions();
    let boardAndPopulation = this.generateRandomBoard(currDimensions.cols, currDimensions.rows);
    this.setState({
      board: boardAndPopulation.board,
      population: boardAndPopulation.population,
      clusterSize: currDimensions.clusterSize,
      generation: 1,
      gameStatus: 'started',
    });
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
    const currDimensions = this.getCurrentDimensions();
    const newBoard = this.generateEmptyBoard(currDimensions.cols, currDimensions.rows);
    this.boardRef.stopGenerationInterval();
    this.setState({
      board: newBoard,
      clusterSize: currDimensions.clusterSize,
      gameStatus: 'stopped',
      generation: null,
      population: 0,
    });
  }

  handleSetupRandomGame() {
    const currDimensions = this.getCurrentDimensions();
    let boardAndPopulation = this.generateRandomBoard(currDimensions.cols, currDimensions.rows);
    this.setState({
      board: boardAndPopulation.board,
      population: boardAndPopulation.population,
      clusterSize: currDimensions.clusterSize,
      generation: 1,
      gameStatus: 'random-setup',
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
    const { board, clusterSize, gameStatus, generation, population } = this.state;
    const { instructionsDisplayed, onToggleInstructionsDisplay } = this.props;

    return (
      <div className="life-simulation">
        <LifeControls
          gameStatus={gameStatus}
          generation={generation}
          instructionsDisplayed={instructionsDisplayed}
          population={population}
          onContinueGame={() => this.handleContinueGame()}
          onPauseGame={() => this.handlePauseGame()}
          onResetGame={() => this.handleResetGame()}
          onStartGame={() => this.handleStartGame()}
          onSetupRandomGame={() => this.handleSetupRandomGame()}
          onToggleInstructionsDisplay={onToggleInstructionsDisplay}
        />
        <LifeBoard
          board={board}
          onNextBoard={(nextBoard, populationCount) => this.handleNextBoard(nextBoard, populationCount)}
          onToggleLifeCell={(cell) => this.handleToggleLifeCell(cell)}
          clusterSize={clusterSize}
          ref={(boardRef) => {this.boardRef = boardRef}}
        />
      </div>
    );
  }
}

export default LifeSimulation;
