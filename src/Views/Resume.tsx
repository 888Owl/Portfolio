import React from 'react'
import styled from 'styled-components'


const Resume: React.FC = () => {
    return(
        <Body>
            <Horizontal>
            <Title>Samson Swift <br/> 孫迅</Title>
            <Title>台北市信義路五段150巷426弄11號</Title>
            </Horizontal>
        </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
background- color: white;
color: black;
display: flex;
flex-direction: column;
`

const Horizontal = styled.div`
display: flex; 
flex-direction: row;
`

const Title = styled.h2`
text-align: center;
`
export default Resume