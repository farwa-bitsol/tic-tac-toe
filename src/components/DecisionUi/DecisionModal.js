import React, { useContext, useEffect } from 'react'
import classes from './DecisionModal.module.css'
import Modal from './Modal'
import GameContext from '../../store/game-context';

function DecisionModal() {

    const gameCtx = useContext(GameContext);

    const setScoreHandler = () => {
        if (gameCtx.decision === 'Better Luck Next Time!')
            gameCtx.incComputerScore();
        else if (gameCtx.decision === 'You Win!')
            gameCtx.incHumanScore();

    }

    const playAgainHanlder = () => {
        gameCtx.playAgain();
    }

    useEffect(() => {
        setScoreHandler();
    }, [])

    return (
        <Modal>
            <div className={classes.result}>
                <h1>{gameCtx.decision}</h1></div>
            <div className={classes['play-again']} onClick={playAgainHanlder}>
                <h1>Play again?</h1></div>
        </Modal>
    )
}

export default DecisionModal
