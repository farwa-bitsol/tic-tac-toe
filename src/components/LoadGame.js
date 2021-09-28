import React, {useContext } from 'react'
import SelectPlayer from './SelectionUi/SelectPlayer';
import GameBoard from './GameBoard/GameBoard';
import DecisionModal from './DecisionUi/DecisionModal';
import GameContext from '../store/game-context';
function LoadGame() {

    const gameCtx = useContext(GameContext);
    return (
        <>
            {gameCtx.selectedSide === '' && gameCtx.decision === '' && <SelectPlayer />}
            {(gameCtx.decision === '' && gameCtx.selectedSide !== '') && < GameBoard />}
            {gameCtx.decision !== '' && <DecisionModal />}
        </>
    )
}

export default LoadGame
