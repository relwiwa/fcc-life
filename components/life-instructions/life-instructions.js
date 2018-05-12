import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import LifeInstruction from './life-instruction';
import TabsContainer from '../../../../reusable-components/tabs-container/tabs-container';

import instructionsData from './life-instructions-data';

class LifeInstructions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeInstruction: 0,
      blinkerBoard: null,
      toadBoard: null,
    };

    this.handleChangeActiveInstruction = this.handleChangeActiveInstruction.bind(this);
  }

  componentWillMount() {
    this.setState({
      toadBoard: instructionsData[2].boardSpecs.toad.board,
      blinkerBoard: instructionsData[2].boardSpecs.blinker.board,
    });
  }

  handleChangeActiveInstruction(tabIndex) {
    this.setState({
      activeInstruction: tabIndex,
    });
  }

  handleNextBoard(nextBoard, oscillatorName) {
    const nextState = {};
    nextState[oscillatorName + 'Board'] = nextBoard;
    this.setState(nextState);
  }

  render() {
    const { onToggleInstructionsDisplay } = this.props;
    const { activeInstruction, blinkerBoard, toadBoard } = this.state;

    return (
      <div className="life-instructions">
        <TabsContainer
          tabs={instructionsData.map(instructionDatum => {
            return instructionDatum.title
          })}
          activeTab={activeInstruction}
          onChangeActiveTab={this.handleChangeActiveInstruction}
          onToggleTabsContainer={onToggleInstructionsDisplay}
        >
          <div>
            <h3 className="text-center">Conway's Game of Life</h3>
            <div className="grid-x grid-padding-x">
              <div className="cell medium-6">
                <p>Conways's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970</p>
                <p>The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</p>
                <p>It follows <a onClick={() => this.handleChangeActiveInstruction(1)}>a set of rules</a> defining how cells live on, die and get reborn from generation to generation</p>
                <p>During its evolution, certain <a onClick={() => this.handleChangeActiveInstruction(2)}>patterns emerge</a>. These include still lives, oscillators and others</p>
              </div>
              <div className="cell medium-6">
                <p>In this implementation you can:</p>
                <ul className="fa-ul">
                  {instructionsData[0].featureList.map((item, index) => <li key={item.substr(0, 10)}><FontAwesomeIcon icon="arrow-circle-right" listItem /> {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center">Conway's Game of Life: Rules</h3>
            <div className="grid-x grid-padding-x">
              {Object.keys(instructionsData[1].boardSpecs).map((key) => (
                <LifeInstruction
                  key={key}
                  board={this.props[key + 'Board']}
                  onNextBoard={(nextBoard) => this.handleNextBoard(nextBoard, key)}
                  instruction={instructionsData[1].boardSpecs[key]}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-center">Conway's Game of Life: Patterns</h3>
            <div className="grid-x grid-padding-x">
              {Object.keys(instructionsData[2].boardSpecs).map((key) => (
                ((instructionsData[2].boardSpecs[key].oscillator === undefined)
                ? <LifeInstruction
                    key={key}
                    instruction={instructionsData[2].boardSpecs[key]}
                  />
                : <LifeInstruction
                    key={key}
                    board={this.state[key + 'Board']}
                    onNextBoard={(nextBoard) => this.handleNextBoard(nextBoard, key)}
                    instruction={instructionsData[2].boardSpecs[key]}
                  />
                )
              ))}
            </div>
          </div>
       </TabsContainer>
    </div>
    );
  }
}

export default LifeInstructions;
