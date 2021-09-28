import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

function StyledContainer(props) {
    const [backgroundClr, setBackground] = useState('white');
    useEffect(() => {

        const colorTimeOut = setTimeout(
            () => setBackground(Math.floor(Math.random() * 16777215).toString(16)),
            2000
        );
        return () => {
            clearTimeout(colorTimeOut);
                   }
    }, [backgroundClr])    

    const StyledContainer = styled.section`
    color: #${backgroundClr};
    font-size: 40px;
    font-family: 'Gluten', cursive; `;
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

export default StyledContainer
