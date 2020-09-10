import React from 'react'
import styled from 'styled-components'


const Introduction: React.FC = () => {


  return (
    <StyledDiv>
    <Styledh1> Sam Swift <br/> Frontend Developer</Styledh1>
    <StyledSpacer/>
    <StyledNote> I have experience working professionally with <br/>React, Egret, Angular and building Dapps with Ethereum. </StyledNote>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
    display: flex;
    flex-flow: column;
    
`

const Styledh1 = styled.p`
    margin-top: 5%;
    margin-bottom: 0px;
    font-size: 34px;
`

const StyledNote = styled.p`
    font-size: 17px;
`

const StyledSpacer = styled.div`
height: 15px;
width: 100%;
`


export default Introduction