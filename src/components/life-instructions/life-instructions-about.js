import React from 'react';

const LifeInstructionsAbout = (props) => {
  const { onChangeActiveInstruction } = props;

  return (
    <div className="card-block">
      <h4 className="card-title text-center">Conway's Game of Life</h4>
      <div className="row text-left">
        <div className="col-12 col-sm-6">
          <p className="card-text">Conways's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970</p>
          <p className="card-text">The automaton is determined by its initial configuration and requires no further input</p>
          <p className="card-text">It follows <a href="#" onClick={((event) => onChangeActiveInstruction(event, 'rules'))}>a set of rules</a> defining how cells live on, die and get reborn from generation to generation</p>
          <p className="card-text">During its evolution, certain <a href="#" onClick={((event) => onChangeActiveInstruction(event, 'patterns'))}>patterns emerge</a>, containing, still lives, oscillators and others</p>
        </div>
        <div className="col-12 col-sm-6 mt-3 mt-sm-0">
          <p className="card-text">In this implementation you can:</p>
          <ul className="card-text">
            <li>Watch how random boards evolve</li>
            <li>Create your own configuration and see how it evolves</li>
            <li>Manipulation is possible by clicking on the cell you want to add or remove from the board</li>
            <li>You can pause, manipulate, reset and continue the game at any time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LifeInstructionsAbout;
