import React from 'react';

const LifeControls = (props) => {
  const { gameStatus, generation, instructionsDisplayed, onContinueGame, onPauseGame, onResetGame, onSetupRandomGame, onStartGame, onToggleInstructionsDisplay, population } = props;

  const renderStatusMessage = () => {
    return (
      <div className="cell small-10 large-6 small-offset-1 large-offset-0 text-center">
        {gameStatus === 'started' && <p>
          Watch the population evolve from generation to generation or <a href="#" onClick={onResetGame}>setup your own population</a>{instructionsDisplayed === false && <span>. There are also <a href="#" onClick={onToggleInstructionsDisplay}>instructions</a> to learn what's happening</span>}
        </p>}
        {(gameStatus === 'paused') && <p>
          <a href="#" onClick={onContinueGame}>Continue simulation</a> or <a href="#" onClick={onResetGame}>setup a new population</a>
        </p>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup') && <p>
          Click the fields to setup a population or create a <a href="#" onClick={onSetupRandomGame}>randomly generated population</a> that you can manipulate{instructionsDisplayed === false && <span>. Plus, there are <a href="#" onClick={onToggleInstructionsDisplay}>instructions</a> to learn what's going on</span>}
        </p>}
        {gameStatus === 'all-dead' && <p>
          <strong>After {generation} generation{generation > 1 && <span>s</span>}, the whole population died.</strong><br />Click the fields to setup a new population or create a <a href="#" onClick={onSetupRandomGame}>randomly generated population</a>
        </p>}
      </div>
    );
  };

  const renderControlButtons = () => {
    return (
     <div className="cell large-3 align-center button-group small">
        {gameStatus === 'started' &&
          <button
              className="button"
              onClick={onPauseGame}
            >Pause</button>}
        {gameStatus === 'paused' &&
          <button
            className="button"
            onClick={onContinueGame}
          >Continue</button>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') &&
          <button
            className={'button' + (population === 0 ? ' disabled' : '')}
            onClick={population === 0 ? null : onStartGame}
            >Start</button>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') &&
          <button
            className="button"
            onClick={onSetupRandomGame}
            >Random</button>}
        <button
            className={'button' + (population === 0 ? ' disabled' : '')}
            onClick={population === 0 ? null : onResetGame}
          >Reset</button>
      </div>
    );
  };

  return (
    <div className="life-controls grid-x grid-padding-x align-middle">
      <h4 className="cell large-3 text-center large-text-left">
        {generation !== null && <span>Generation {generation}</span>}
      </h4>
        {renderStatusMessage()}
        {renderControlButtons()} 
    </div>
  );
};

export default LifeControls;
