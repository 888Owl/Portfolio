import React from 'react'
import styled from 'styled-components'

const Container: React.FC = (props) => {
    return (
        <StyledContainer>
            {props.children}
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
background-color: #006464;
`

export default Container