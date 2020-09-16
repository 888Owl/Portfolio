import React from 'react'
import styled from 'styled-components'
const Introduction: React.FC = () => {

  return (
    <StyledDiv>
    <Styledh1> Sam Swift <br/> Frontend Developer</Styledh1>
    <StyledSpacer/>
    <StyledNote> I have experience working professionally with <br/>React, Egret, Angular and building Dapps with Ethereum. </StyledNote>
    <StyledLink href="https://docs.google.com/document/d/e/2PACX-1vQLC-msXzjzZy3tbbYDFk1jb5G0D7LjDbyxuQuTUxrAoexyzaulnyQphlTy6ZeM3bSWZEJhaPVVo63p/pub">My Resume</StyledLink>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  position: absolute:
  top: 5%;
  text-align: center;
  display: flex;
  flex-flow: column;
`
const Styledh1 = styled.p`
@media (min-width: 900px){
  font-size: 30px;
  }
  @media (max-width: 900px){
    font-size: 24px;
  }
`
const StyledNote = styled.p`
font-size: 17px;
`
const StyledLink = styled.a`
color: yellow;
font-size: 19px;
text-align: center;
`
const StyledSpacer = styled.div`
height: 15px;
width: 100%;
`
export default Introduction