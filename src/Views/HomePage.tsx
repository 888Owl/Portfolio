import React, { useState } from 'react'
import styled from 'styled-components'

import VertSpacer from './Components/VertSpacer'
import SKY from '../Images/SKY.png'
import Introduction from './Introduction'
import me from '../Images/me.png'
const HomePage: React.FC = (props) => {
    const [flipped, setFlipped] = useState(false)

    const flip = () => {
        setFlipped(!flipped)
    }
    return (
        <Main style={{ backgroundImage: `url(${SKY})` }}>
            <Fadelayer />
            <Styledimg src={me} alt='Sam Swift' />
            <VertSpacer />
            <Introduction />
            {!flipped ? 
            <HB onClick={flip}>&#x0224B;</HB> 
            : 
            <>
            <Side>{props.children}</Side>
            <HB onClick={flip}>&#x02AA1;</HB>
            </>
            }
        </Main>
    )
}

const Main = styled.section`
display: flex;
flex-diredction: column;
flex-flow: column;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
`

const Styledimg = styled.img`
border-radius: 12px;
margin-left:auto;
margin-right:auto;
@media (min-width: 900px){
 width:150px;
 height:150px;
}
@media (max-width: 900px){
    width:50px;
    height:50px;
}
`

const Fadelayer = styled.div`
background-color: black;
margin: auto;
height: 100vh;
width: 100vw;
opacity: 0;
position: absolute;
animation-iteration-count: 1;
animation-duration: 5s;
animation-name: shrinker;
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
height: 100vh;
position: absolute;
right: 0;
top: 0;
@media (min-width: 900px){
        width: 30vw;
        background-color: rgba(0,0,13, 0.6);
    }
   @media (max-width: 900px){
        width: 100vw;
        background-color: rgba(0,0,13, 0.8);
    }
`

export default HomePage