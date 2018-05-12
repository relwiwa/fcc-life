import React from 'react';

import IconButton from '../../../../reusable-components/icon-button';

const LifeControls = ({ gameStatus, generation, instructionsDisplayed, onContinueGame, onPauseGame, onResetGame, onSetupRandomGame, onStartGame, onToggleInstructionsDisplay, population }) => {
  const renderStatusMessage = () => {
    return (
      <div className="cell small-10 large-6 small-offset-1 large-offset-0 text-center">
        {gameStatus === 'started' && <p>
          Watch the population evolve from generation to generation or <a onClick={onResetGame}>setup your own population</a>{instructionsDisplayed === false && <span>. There are also <a onClick={onToggleInstructionsDisplay}>instructions</a> to learn what's happening</span>}
        </p>}
        {(gameStatus === 'paused') && <p>
          <a href="#" onClick={onContinueGame}>Continue simulation</a> or <a onClick={onResetGame}>setup a new population</a>
        </p>}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup') && <p>
          Click the fields to setup a population or create a <a onClick={onSetupRandomGame}>randomly generated population</a> that you can manipulate{instructionsDisplayed === false && <span>. Plus, there are <a onClick={onToggleInstructionsDisplay}>instructions</a> to learn what's going on</span>}
        </p>}
        {gameStatus === 'all-dead' && <p>
          <strong>After {generation} generation{generation > 1 && <span>s</span>}, the whole population died.</strong><br />Click the fields to setup a new population or create a <a onClick={onSetupRandomGame}>randomly generated population</a>
        </p>}
      </div>
    );
  };

  const renderControlButtons = () => {
    return (
     <div className="cell large-3 align-center button-group small">
        {gameStatus === 'started' && <IconButton
          faIcon="pause"
          foundationClass="primary"
          onClick={onPauseGame}
          text="Pause"
        />}
        {gameStatus === 'paused' && <IconButton
          faIcon="play"
          foundationClass="primary"
          onClick={onContinueGame}
          text="Continue"
        />}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') && <IconButton
          faIcon="play"
          foundationClass={'primary' + (population === 0 ? ' disabled' : '')}
          onClick={population === 0 ? null : onStartGame}
          text="Start"
        />}
        {(gameStatus === 'stopped' || gameStatus === 'random-setup' || gameStatus === 'all-dead') && <IconButton
          faIcon="random"
          foundationClass="primary"
          onClick={onSetupRandomGame}
          text="Random"
        />}
        <IconButton
          faIcon="undo"
          foundationClass={'primary' + (population === 0 ? ' disabled' : '')}
          onClick={population === 0 ? null : onResetGame}
          text="Reset"
        />
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
