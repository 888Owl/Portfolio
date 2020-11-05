import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../Components/Modal'

interface InnerGroupProps {
    Isrc: string,
    Ialt: string,
    Ihref: string,
    Chref: string,
    ModalText: string
    }
const InnerGroup: React.FC<InnerGroupProps> = (props) =>{
    const [openModal, setOpenModal] = useState(false)

    const OpenModal = () =>{
        setOpenModal(!openModal)
        if(!openModal){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
        console.log(document.body.style.overflow)
    }
    return(
        <>
        <StyledInnerGrouping>
            <StyledProjImg src={props.Isrc} alt={props.Ialt} />
            <StyledLink href={props.Ihref}>Visit</StyledLink>
            <StyledLink href={props.Chref}>{props.Chref === 'null' ? 'Private' : 'Code' }</StyledLink>
            <StyledInfo onClick={OpenModal}>Info</StyledInfo>
        </StyledInnerGrouping>
        {openModal && <Modal clicker={OpenModal} text={props.ModalText} />}
        </>
    )
}

const StyledInnerGrouping = styled.div`
width: 33%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`
const StyledProjImg = styled.img`
@media (min-width: 900px){
width: 150px;
height: 75px;
&:hover {
    animation: expand;
    animation-duration: 1s;
    width: 350px; 
    height: 175px; 
    z-index: 3;
}
}
@media (max-width: 900px){
    width: 75px;
    height: 37.5px;
    }
`

const StyledInfo = styled.h4`
@media (min-width: 900px){
    cursor: pointer;
    padding: 4px;
    width: 140px;
    text-decoration: none;
    color: yellow;
    &:hover {
        background-color: white;
        color: #006464;
    }
    }
    @media (max-width: 900px){
        padding: 2px;
        width: 65px;
        text-decoration: none;
        color: yellow;
        }
`

const StyledLink = styled.a`
@media (min-width: 900px){
padding: 4px;
width: 140px;
text-decoration: none;
color: yellow;
&:hover {
    background-color: white;
    color: #006464;
}
}
@media (max-width: 900px){
    padding: 2px;
    width: 65px;
    text-decoration: none;
    color: yellow;
    }
`

export default InnerGroup