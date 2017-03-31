import React from 'react';

const LifeControls = (props) => {
  const { gameStatus, generation, onContinueGame, onPauseGame, onResetGame, onStartGame, onStartRandomGame } = props;

  return (
    <div className="life-controls row my-3">
      <h4 className="col-12 offset-sm-1 col-sm-5 text-center text-sm-left mt-sm-1">
        {generation !== null && <span>Generation {generation}</span>}
      </h4>
      <div className="col-12 col-sm-6 text-center text-sm-right">

        {gameStatus === 'started' &&
          <button
              className="btn btn-primary"
              onClick={onPauseGame}
            >Pause</button>}
      
        {gameStatus === 'paused' &&
          <button
            className="btn btn-primary"
            onClick={onContinueGame}
          >Continue</button>}
        
        {(gameStatus === 'started' || gameStatus === 'paused') &&
          <button
            className="btn btn-primary mx-3"
            onClick={onResetGame}
          >Reset</button>}

        {(gameStatus === 'stopped' || gameStatus === 'random-setup') &&
          <button
            className="btn btn-primary"
            onClick={onStartGame}
            >Start</button>}

        {(gameStatus === 'stopped' || gameStatus === 'random-setup') &&
          <button
            className="btn btn-primary mx-3"
            onClick={onStartRandomGame}
            >Random</button>}

      </div>

    </div>
  );
};

export default LifeControls;
