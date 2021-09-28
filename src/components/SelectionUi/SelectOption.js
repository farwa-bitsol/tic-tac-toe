import React from 'react'
import classes from './SelectOption.module.css';

function SelectOption({op,selectSide}) {
    return (
        <div className={classes.option} onClick={selectSide}>      
        <h1 > {op}</h1>
        </div>
    )
}

export default SelectOption
