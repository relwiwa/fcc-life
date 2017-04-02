import React, { Component } from 'react';

import instructionsData from './life-instructions-data';
import LifeInstructionsContent from './life-instructions-content';
import LifeInstructionsNav from './life-instructions-nav';

class LifeInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInstruction: null,
      toadBoard: null,
      blinkerBoard: null,
    };

  }

  componentWillMount() {
    this.setState({
      activeInstruction: 'about',
      toadBoard: instructionsData.patterns.toad.board,
      blinkerBoard: instructionsData.patterns.blinker.board,
    });
  }

  handleChangeActiveInstruction(event, instruction) {
    event.preventDefault();
    if (this.state.activeInstruction !== instruction) {
      this.setState({
        activeInstruction: instruction,
      });
    }
  }

  handleNextBoard(nextBoard, oscillatorName) {
    const nextState = {};
    nextState[oscillatorName + 'Board'] = nextBoard;
    this.setState(nextState);
  }

  render() {
    const { onToggleInstructionsDisplay } = this.props;
    const { blinkerBoard, toadBoard } = this.state;
    return (
      <div className="life-instructions mb-3">
        <div className="card text-center">
          <LifeInstructionsNav
            activeInstruction={this.state.activeInstruction}
            navItems={Object.keys(instructionsData)}
            onChangeActiveInstruction={(event, instruction) => this.handleChangeActiveInstruction(event, instruction)}
          />
          <LifeInstructionsContent
            activeInstruction={this.state.activeInstruction}
            instructionsData={instructionsData}
            onChangeActiveInstruction={(event, instruction) => this.handleChangeActiveInstruction(event, instruction)}
            blinkerBoard={blinkerBoard}
            toadBoard={toadBoard}
            onNextBoard={(nextBoard, oscillatorName) => this.handleNextBoard(nextBoard, oscillatorName)}
          />
          <div className="card-footer">
            <div className="card-text text-right">
              <a
                href="#"
                className="card-link"
                onClick={() => onToggleInstructionsDisplay()}
              >
                Close
              </a>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default LifeInstructions;
