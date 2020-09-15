import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import house from '../Images/house.png'
import myTime from '../Images/Me_in_taiwan_collage.png'
import photography from '../Images/Photography_collage.png'
import animals from '../Images/Animals_collage.png'

const Lightbox: React.FC = () => {
    const nameArr = ['My Time in Taiwan', 'Photography of mine', 'My Little Friends']
    const photoArr = [myTime, photography, animals]
    const altArr = ['A collage of my time in Taiwan', 'A collage of my photography and my star model', 'A collage of very cute animals that never ruined any furniture...I swear.']

    return (
        <StyledDiv>
            <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='House to show that this is a button to the home page' /></StyledSections>
            </StyledSectionsHolder>
            <StyledGroupLeft>
                <Styledh1>{nameArr[0]}</Styledh1>
                <StyledPhoto alt={altArr[0]} src={photoArr[0]} />
                </StyledGroupLeft>
                <StyledGroupCenter>
                <Styledh1>{nameArr[1]}</Styledh1>
                <StyledPhoto alt={altArr[1]} src={photoArr[1]} />
                </StyledGroupCenter>
                <StyledGroupRight>
                <Styledh1>{nameArr[2]}</Styledh1>
                <StyledPhoto alt={altArr[2]} src={photoArr[2]} />
                </StyledGroupRight>
            <StyledSpacer />
        </StyledDiv>
    )
}
const StyledGroupLeft = styled.div`
@media (min-width: 900px){
width: 256px;
position: absolute;
animation: floatLeft;
animation-duration: 2s;
top: 30%;
left: 15%;
}
@media (max-width: 900px){
    width: 256px;
    position: absolute;
    animation: floatLeft;
    animation-duration: 2s;
    top: 60%;
    margin-left: auto;
    margin-right: auto;
    }
`
const StyledGroupRight = styled.div`
@media (min-width: 900px){
width: 256px;
position: absolute;
animation: floatRight;
animation-duration: 2s;
top: 30%;
right: 15%;
}
@media (max-width: 900px){
    width: 256px;
    position: absolute;
    animation: floatRight;
    animation-duration: 2s;
    margin-left: auto;
    margin-right: auto;
    }
`
const StyledGroupCenter = styled.div`
@media (min-width: 900px){
width: 256px;
position: absolute;
animation: floatUp;
animation-duration: 2s;
top: 30%;
right: 41.5%;
}
@media (max-width: 900px){
    width: 256px;
    position: absolute;
    animation: floatUp;
    animation-duration: 2s;
    top: 25%;
    margin-left: auto;
    margin-right: auto;
    }
`
const StyledDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
const Styledh1 = styled.p`
    margin-top: 5%;
    margin-bottom: 0px;
    font-size: 22px;
`
const StyledPhoto = styled.img`
@media (min-width: 900px){
    width: 256px;
}
@media (max-width: 900px){
    width: 140px;
}
`
const StyledSpacer = styled.div`
height: 15px;
width: 100%;
`
const StyledSections = styled(NavLink)`
    height: 10%;
    width: 10%;
    padding:2%;
`
const StyledSectionsHolder = styled.nav`
@media (min-width: 900px){
        position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 15%;
    width: 15%;
    display: flex;
        left: 3%;
    }
    @media (max-width: 900px){
        position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 15%;
    width: 15%;
    display: flex;
        left: 2%;
    }
`
export default Lightbox