import React from 'react'
import styled from 'styled-components'

import HomeButton from './HomeButton'

const Container: React.FC = (props) => {
    return (
        <StyledContainer>
            <StyledInnerContainer>
            <HomeButton />
            {props.children}
            </StyledInnerContainer>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
height: 90%;
`

const StyledInnerContainer = styled.div`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
max-height: 90%;
overflow-y: scroll;
overflow-x: visible;
height: 90%;
`

export default Container