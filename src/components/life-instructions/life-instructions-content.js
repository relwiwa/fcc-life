import React from 'react';

import LifeInstruction from './life-instruction';
import LifeInstructionsAbout from './life-instructions-about';

const LifeInstructionsContent = (props) => {
  const { activeInstruction, instructionsData, onChangeActiveInstruction } = props;

  const renderInstructions = (instruction) => {
    return (
      <div className="card-block row">
        <h4 className="col-12 card-title mb-4">Conway's Game of Life: {instruction[0].toUpperCase() + instruction.substr(1)}</h4>
        {Object.keys(instructionsData[instruction]).map((key) => (
          <LifeInstruction
            key={key}
            instruction={instructionsData[instruction][key]}
          />
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
