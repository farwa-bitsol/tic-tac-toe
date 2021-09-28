import React, { useContext} from 'react'
import classes from './SelectPlayer.module.css'
import SelectOption from './SelectOption'
import StyledContainer from './StyledContainer'
import GameContext from '../../store/game-context';

function SelectPlayer() {
   
    const gameCtx = useContext(GameContext);
   
    const selectSide = (side) => (event) => {
        gameCtx.setSelectedSide(side);
             
    }
   
    return (
        <div className={classes['select-player']} >
            <>
                <h1> Choose Your Side: </h1>
            </>
            <div className={classes['select-player__option']}>
                <SelectOption op='x' selectSide={selectSide('x')} />
                <SelectOption op='o' selectSide={selectSide('o')} />
            </div>
        </div>
    )
}

export default SelectPlayer
