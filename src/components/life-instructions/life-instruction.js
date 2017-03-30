import React from 'react';

import LifeBoard from '../life-board/life-board';

const LifeInstruction = (props) => {
  const { instruction } = props;

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <h4 className="card-title">{instruction.headline}</h4>
      <div className="row">
        <div className="col-4 offset-4 col-sm-6 offset-sm-3">
          <LifeBoard
            board={instruction.board}
            clusterSize={instruction.clusterSize}
          />
        </div>
      </div>
      <p className="card-text my-2">{instruction.explanation}</p>
    </div>
  );
}

export default LifeInstruction;
