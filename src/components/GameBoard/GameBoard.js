import React, { useState, useContext, useEffect } from 'react';
import GameBox from './GameBox';
import classes from './GameBoard.module.css';
import ScoreBoard from './ScoreBoard';
import GameContext from '../../store/game-context';

function GameBoard() {

    const [gameBox, setGameBox] = useState([
        '', '', '', '', '', '', '', '', ''
    ]);
    const [runFlag, setRunFlag] = useState(false);


    useEffect(() => {
        if (!runFlag) {
            return;
        }

        setCountArrayHandler();
        if (gameCtx.countArray > 0)
            checkForDecision();

        if (gameCtx.countArray % 2 !== 0 && gameCtx.countArray < 7) {
            const max = 8;
            let rand = Math.floor(Math.random() * (max + 1));
            let flag = true;
            const timeout = setTimeout(() => {
                const values = [...gameBox];
                while (flag) {

                    if (values[rand] !== '')
                        rand = Math.floor(Math.random() * (max + 1));
                    else {

                        if (gameCtx.selectedSide === 'x')
                            values[rand] = 'o';
                        else
                            values[rand] = 'x';
                        flag = false;
                        setGameBox(values);

                    }
                }

            }, 500);
            return () => {
                clearTimeout(timeout);
            };
        }



    }, [gameBox]);



    const gameCtx = useContext(GameContext);

    const setCountArrayHandler = () => {
        gameCtx.setCountArray();
    }

    const setDecisionHandler = (dec) => {
        gameCtx.setDecision(dec);
    }

    const winGame = () => {
        setTimeout(() => {
            setDecisionHandler('You Win!');

        }, 500);
    }

    const looseGame = () => {
        setTimeout(() => {
            setDecisionHandler('Better Luck Next Time!');
        }, 500);

    }

    const evaluateResult = (ind) => {
        if (gameCtx.selectedSide === gameBox[ind])
            winGame();
        else
            looseGame();
    }

   
    const checkForDecision = () => {

        let j = 0;
        for (let i = 0; i < 7;) {

            if (gameBox[i] !== '' && gameBox[i + 1] !== '' && gameBox[i + 1 * 2] !== '' && (gameBox[i] === gameBox[i + 1] && gameBox[i + 1] === gameBox[i + 1 * 2])) {

                evaluateResult(i);
            }

            else if (gameBox[j] !== '' && gameBox[j + 3] !== '' && gameBox[j + 3 * 2] !== '' && (gameBox[j] === gameBox[j + 3] && gameBox[j + 3] === gameBox[j + 3 * 2])) {

                evaluateResult(j);

            }

            i = i + 3;
            j = j + 1;

        }
        if (gameBox[0] !== '' && gameBox[4] !== '' && gameBox[8] !== '' && (gameBox[0] === gameBox[4] && gameBox[4] === gameBox[8])) {

            evaluateResult(0);
        }

        else if (gameBox[2] !== '' && gameBox[4] !== '' && gameBox[6] !== '' && (gameBox[2] === gameBox[4] && gameBox[4] === gameBox[6])) {

            evaluateResult(2);
        }

        else if (gameCtx.countArray === 7) {
            setTimeout(() => {
                setDecisionHandler('Its a draw!!!');

            }, 500);

        }
    }

    const handleFillBox = (ind) => (event) => {
        if (gameBox[ind] !== '')
            return;
        const values = [...gameBox];
        values[ind] = gameCtx.selectedSide;
        setRunFlag(true);
        setGameBox(values);

    }

    const boxes = gameBox.map((item, key) => {
        return (
            <GameBox key={key} handleFill={handleFillBox(key)} item={item}></GameBox>
        )
    })
    return (
        <div className={[classes['game-board']]}>
            <ScoreBoard />
            {boxes}
        </div>
    )
}

export default GameBoard
