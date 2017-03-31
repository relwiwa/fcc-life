import React, { Component } from 'react';

import LifeSimulation from './life-simulation/life-simulation';
import LifeInstructions from './life-instructions/life-instructions';

class LifeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructionsDisplayed: true,
    };
  }

  handleToggleInstructionsDisplay() {
    this.setState({
      instructionsDisplayed: !this.state.instructionsDisplayed
    });
  }

  // RENDER METHODS

  render() {
    const { instructionsDisplayed } = this.state;

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
        <LifeSimulation />
      </div>
    );
  }

};

export default LifeGame;
