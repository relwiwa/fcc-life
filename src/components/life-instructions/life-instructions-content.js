import React from 'react';

import LifeInstruction from './life-instruction';
import LifeInstructionsAbout from './life-instructions-about';

const LifeInstructionsContent = (props) => {
  const { activeInstruction, instructionsData, onChangeActiveInstruction, onNextBoard } = props;

  // This function is way too overloaded and should be split up
  const renderInstructions = (instruction) => {
    return (
      <div className="card-block row">
        <h4 className="col-12 card-title mb-4">Conway's Game of Life: {instruction[0].toUpperCase() + instruction.substr(1)}</h4>
        {Object.keys(instructionsData[instruction]).map((key) => (
          ((instructionsData[instruction][key].oscillator === undefined)
          ? <LifeInstruction
              key={key}
              instruction={instructionsData[instruction][key]}
            />
          : <LifeInstruction
              key={key}
              board={props[key + 'Board']}
              onNextBoard={(nextBoard) => onNextBoard(nextBoard, key)}
              instruction={instructionsData[instruction][key]}
            />
          )          
        ))}
      </div>
    );
  }

  return (
    <div className="life-instructions-content">
      {activeInstruction === 'about' &&
        <LifeInstructionsAbout
          onChangeActiveInstruction={onChangeActiveInstruction}
        />
      }
      {activeInstruction === 'rules' && renderInstructions('rules')}
      {activeInstruction === 'patterns' && renderInstructions('patterns')}
    </div>

  );
}

export default LifeInstructionsContent;
