import React from 'react';

const LifeControls = (props) => {
  const { gameStatus, generation, instructionsDisplayed, onContinueGame, onPauseGame, onResetGame, onStartGame, onStartRandomGame, onToggleInstructionsDisplay, population } = props;

  const renderStatusMessage = () => {
    return (
      <div className="col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-6 text-center">
        {gameStatus === 'started' && <p>
          Just watch the population evolve or <a href="#" onClick={onResetGame}>setup your own population</a>{instructionsDisplayed === false && <span>. Plus, there are <a href="#" onClick={onToggleInstructionsDisplay}>instructions</a> to learn what's going on</span>}
        </p>}
        {(gameStatus === 'paused') && <p>
          <a href="#" onClick={onContinueGame}>Continue simulation</a> or <a href="#" onClick={onResetGame}>setup a new population</a>
        </p>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup') && <p>
          Click the fields to setup a population or create a <a href="#" onClick={onStartRandomGame}>randomly generated population</a>{instructionsDisplayed === false && <span>. Plus, there are <a href="#" onClick={onToggleInstructionsDisplay}>instructions</a> to learn what's going on</span>}
        </p>}
        {gameStatus === 'all-dead' && <p>
          <strong>After {generation} generation{generation > 1 && <span>s</span>}, the whole population died.</strong><br />Click the fields to setup a new population or create a <a href="#" onClick={onStartRandomGame}>randomly generated population</a>
        </p>}
      </div>
    );
  };

  const renderControlButtons = () => {
    return (
     <div className="col-12 col-lg-3 text-center text-lg-right">
        {gameStatus === 'started' &&
          <button
              className="btn btn-sm btn-primary mr-3"
              onClick={onPauseGame}
            >Pause</button>}
        {gameStatus === 'paused' &&
          <button
            className="btn btn-sm btn-primary mr-3"
            onClick={onContinueGame}
          >Continue</button>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') &&
          <button
            className={'btn btn-sm btn-primary mr-3' + (population === 0 ? ' disabled' : '')}
            onClick={onStartGame}
            >Start</button>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') &&
          <button
            className="btn btn-sm btn-primary mr-3"
            onClick={onStartRandomGame}
            >Random</button>}
        <button
            className={'btn btn-sm btn-primary' + (population === 0 ? ' disabled' : '')}
            onClick={onResetGame}
          >Reset</button>
      </div>
    );
  };

  return (
    <div className="life-controls no-gutters row align-items-center my-3 mb-lg-2">
      <h4 className="col-12 col-lg-3 text-center text-lg-left mt-lg-1">
        {generation !== null && <span>Generation {generation}</span>}
      </h4>
        {renderStatusMessage()}
        {renderControlButtons()} 
    </div>
  );
};

export default LifeControls;
