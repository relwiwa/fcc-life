import React from 'react';

import LifeBoard from '../life-board/life-board';

const LifeInstruction = (props) => {
  const { instruction } = props;

  const renderStillLife = () => {
    return (
      <LifeBoard
        board={instruction.board}
        clusterSize={instruction.clusterSize}
      />
    );
  }

  const renderOscillator = () => {
    const { board, onNextBoard } = props;

    return (
      <LifeBoard
        board={props.board}
        onNextBoard={onNextBoard}
        clusterSize={instruction.clusterSize}
      />
    );    
  }

  return (
    <div className="cell medium-6 large-3">
      <div className="grid-x grid-padding-y align-center">
        <div className="align-self-center cell small-4 medium-5 medium-offset-0 large-5">
          {instruction.oscillator ? renderOscillator() : renderStillLife() }
        </div>
        <div className="cell text-center">
          <h5>{instruction.headline}</h5>
          <p>{instruction.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default LifeInstruction;
