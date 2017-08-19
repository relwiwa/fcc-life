import React, { Component } from 'react';

import LifeSimulation from './life-simulation/life-simulation';
import LifeInstructions from './life-instructions/life-instructions';

class LifeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructionsDisplayed: false,
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
      <div className="life-game grid-container grid-container-padded">
        <h1 className="text-center">
          Life&nbsp;
          <small className="fa fa-question-circle-o" onClick={() => this.handleToggleInstructionsDisplay()}></small>
        </h1>
        {this.state.instructionsDisplayed &&
          <LifeInstructions
            onToggleInstructionsDisplay={() => this.handleToggleInstructionsDisplay()}
          />
        }
        <LifeSimulation
          instructionsDisplayed={instructionsDisplayed}
          onToggleInstructionsDisplay={() => this.handleToggleInstructionsDisplay()}          
        />
      </div>
    );
  }

};

export default LifeGame;
