import React from 'react';

const GameContext = React.createContext({
    humanScore: 0,
    ComputerScore: 0,
    selectedSide: '',
    countArray: -1,
    decision: '',
    setCountArray: (num) => { },
    setDecision: (score) => { },
    setSelectedSide: (side) => { },
    incHumanScore: () => { },
    incComputerScore: () => { },
    playAgain: () => { },
    resetScore: () => { }

})

export default GameContext;