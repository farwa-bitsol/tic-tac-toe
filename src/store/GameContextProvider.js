import React, { useReducer, useState } from 'react'
import GameContext from './game-context';



const defaultSideState = {
    side: '',
}

const defaultCountState = {
    count: -1
}

const defaultDecisionState = {
    decision: ''
}

const sideReducer = (state, action) => {
    if (action.type === 'CHANGE_SIDE') {
        return ({
            side: action.side
        })
    }
}

const countArrayReducer = (state, action) => {

    if (action.type === 'INCREMENT_COUNT') {

        return ({
            count: state.count + action.count
        })
    }
    else if (action.type === 'REST_COUNT') {
        return ({
            count: action.count
        })
    }

}

const decisionArrayReducer = (state, action) => {
    if (action.type === 'SET_DECISION') {
        return ({
            decision: action.decision
        })
    }
}

function GameContextProvider(props) {
    const [selectSide, dispatchSideAction] = useReducer(sideReducer, defaultSideState);
    const [setCountArray, dispatchCountArrayAction] = useReducer(countArrayReducer, defaultCountState);
    const [setDecisionArray, dispatchDecisionArrayAction] = useReducer(decisionArrayReducer, defaultDecisionState);
    const [humanScore, setHumanScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const setCountArrayHandler = () => {
        dispatchCountArrayAction({ type: 'INCREMENT_COUNT', count: 1 })
    }

    const setDecisionHandler = (dec) => {
        dispatchDecisionArrayAction({ type: 'SET_DECISION', decision: dec });
        dispatchCountArrayAction({ type: 'REST_COUNT', count: -1 });
        dispatchSideAction({ type: 'CHANGE_SIDE', side: '' });
    }

    const setSelectedSideHandler = side => {
        dispatchSideAction({ type: 'CHANGE_SIDE', side: side });
        dispatchDecisionArrayAction({ type: 'SET_DECISION', decision: '' });
        dispatchCountArrayAction({ type: 'REST_COUNT', count: -1 });


    }

    const setHumanScoreHanlder = () => {
        const inc = humanScore + 1;
        setHumanScore(inc);
    }

    const setComputerScoreHandler = () => {
        const inc = computerScore + 1;
        setComputerScore(inc);
    }

    const setPlayAgain = () => {
        dispatchDecisionArrayAction({ type: 'SET_DECISION', decision: '' });
        dispatchCountArrayAction({ type: 'REST_COUNT', count: 0 });
        dispatchSideAction({ type: 'CHANGE_SIDE', side: '' });
    }

    const resetScoreHandler = () => {
        setHumanScore(0);
        setComputerScore(0);
    }


    const gameContext = {
        humanScore: humanScore,
        ComputerScore: computerScore,
        selectedSide: selectSide.side,
        countArray: setCountArray.count,
        decision: setDecisionArray.decision,
        setCountArray: setCountArrayHandler,
        setDecision: setDecisionHandler,
        setSelectedSide: setSelectedSideHandler,
        incHumanScore: setHumanScoreHanlder,
        incComputerScore: setComputerScoreHandler,
        playAgain: setPlayAgain,
        resetScore: resetScoreHandler
    }
    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider
