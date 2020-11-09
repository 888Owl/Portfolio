import React, { useState } from 'react'
import styled from 'styled-components'

import HomePageRouter from '../HomePageRouter'
import BG from '../../Images/BG.png'
const Container: React.FC = (props) => {

    const [flipped, setFlipped] = useState(false)

    const flip = () => {
        setFlipped(!flipped)
    }

    return (
        <StyledContainer style={{ backgroundImage: `url(${BG})` }}>
            <Shadow>
            {!flipped ? 
            <HB onClick={flip}>&#x0224B;</HB> 
            : 
            <>
            <Side>
                <HomePageRouter/>
            </Side>
            <HB onClick={flip}>&#x02AA1;</HB>
            </>
            }
                {props.children}
            </Shadow>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
text-shadow: 2px 2px black;
max-height: 100%;
overflow-y: scroll;
`

const Shadow = styled.div`
display: flex;
flex-direction: column;
height: 200%;
width: 100%;
background-color: rgba(0,0,0,0.6)
`

const HB = styled.button`
width: 5vh;
height: 5vh;
background-color: rgba(0,0,13, 0.6);
color: white;
border: none;
position: absolute;
top: 2vh;
right: 2vw;
font-size: 2.5em;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const Side = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
height: 100vh;
position: absolute;
right: 0;
top: 0;
background-color: rgba(0,0,13, 0.6);
`

export default Container