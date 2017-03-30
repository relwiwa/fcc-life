const instructionsData = {
  about: {},
  rules: {
    continuation: {
      headline: 'Continuation',
      board: [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [0,0,0,0,0]
      ],
      clusterSize: 5,
      explanation: 'Middle cells with two or three alive cells surrounding it, live on to the next generation'
    },
    recreation: {
      headline: 'Recreation',
      board: [
        [0,0,0,0,0],
        [0,0,1,1,0],
        [0,0,0,0,0],
        [0,1,0,1,0],
        [0,0,0,0,0]
      ],
      clusterSize: 5,
      explanation: 'Middle cell is dead, and has exactly four alive cells surrounding it, so it will be born again due to recreation'
    },
    overpopulation: {
      headline: 'Overpopulation',
      board: [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,1,1,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
      ],
      clusterSize: 5,
      explanation: 'Middle cell has more than four alive cells surrounding it, so it will die due to overpopulation'
    },
    underpopulation: {
      headline: 'Underpopulation',
      board: [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [0,0,0,0,0]
      ],
      clusterSize: 5,
      explanation: 'Middle cell has less than two alive cells surrounding it, so it will die due to underpopulation'
    }
  },
  patterns: {
    block: {
      headline: 'Block Still Life',
      board: [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
      ],
      clusterSize: 4
    },
    tub: {
      headline: 'Tub Still Life',
      board: [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,0,0,0,0]
      ],
      clusterSize: 5
    },
    blinker: {
      headline: 'Blinker Oscillator',
      board: [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
      ],
      clusterSize: 5
    },
    toad: {
      headline: 'Toad Oscillator',
      board: [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,1,1,1,0],
        [0,1,1,1,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
      ],
      clusterSize: 6
    },
  }
};

export default instructionsData;
