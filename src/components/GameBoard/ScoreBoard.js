import React, { useContext } from 'react'
import classes from './ScoreBoard.module.css'
import GameContext from '../../store/game-context';

function ScoreBoard() {
    const gameCtx = useContext(GameContext);

    const resetScoreHandler = () =>{
        gameCtx.resetScore();
    }
    return (
        <div className={classes['score-board']}>
            <h2>Score Board</h2>
            <div className={classes.scores}>
                <div>
                    <p>Your Score:</p><span> {gameCtx.humanScore}</span>
                </div>
                <div>
                    <p>Computer Score:</p><span>{gameCtx.ComputerScore}</span>
                </div>
                <p className={classes.reset} onClick={resetScoreHandler}>Reset Score</p>

            </div>
        </div>
    )
}

export default ScoreBoard
