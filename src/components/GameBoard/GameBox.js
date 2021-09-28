import React from 'react'
import classes from './GameBox.module.css';
function GameBox({handleFill,item}) {
     
    return (
        <div className={classes['game-box']} onClick={handleFill}>   
            <h1> {item}  </h1>       
        </div>
    )
}

export default GameBox
