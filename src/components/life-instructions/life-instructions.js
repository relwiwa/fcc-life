import React, { Component } from 'react';

import instructionsData from './life-instructions-data';
import LifeInstructionsContent from './life-instructions-content';
import LifeInstructionsNav from './life-instructions-nav';

class LifeInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInstruction: null,
    };

  }

  componentWillMount() {
    this.setState({
      activeInstruction: 'about',
    });
  }

  handleChangeActiveInstruction(event, instruction) {
    event.preventDefault();
    if (this.state.activeInstruction !== instruction) {
      this.setState({
        activeInstruction: instruction
      });
    }
  }

  render() {
    const { onToggleInstructionsDisplay } = this.props;

    return (
      <div className="life-instructions">
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
