import React, { useState} from 'react'
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
    const [currentModal, setCurrentModal] = useState(0);
    const [currentModalimg, setCurrentModalimg] = useState(0);

    const ModalClicked = function (event: any) {
        const cur_img = event.target.id;
        setCurrentModal(1)
        switch (cur_img) {
            case '1':
                setCurrentModalimg(1)
                break;
            case '2':
                setCurrentModalimg(2)
                break;
            case '3':
                setCurrentModalimg(3)
                break;
            default:
                setCurrentModalimg(0)
                break;
        }
    }

    const ModalCleared = function (event: any) {
        setCurrentModal(0)
        setCurrentModalimg(0)
    }
    return (
        <>
        <StyledDiv>
            <StyledSectionsHolder>
                <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='House to show that this is a button to the home page' /></StyledSections>
            </StyledSectionsHolder>
        </StyledDiv>
                <StyledGroupLeft>
                <Styledh1>{nameArr[0]}</Styledh1>
                <StyledPhoto onClick={ModalClicked} id="1" alt={altArr[0]} src={photoArr[0]} />
                </StyledGroupLeft>
                <StyledGroupCenter>
                <Styledh1>{nameArr[1]}</Styledh1>
                <StyledPhoto onClick={ModalClicked} id="2" alt={altArr[1]} src={photoArr[1]} />
                </StyledGroupCenter>
                <StyledGroupRight>
                <Styledh1>{nameArr[2]}</Styledh1>
                <StyledPhoto onClick={ModalClicked} id="3" alt={altArr[2]} src={photoArr[2]} />
                </StyledGroupRight>
                {currentModal !== 0 && <StyledBackDrop onClick={ModalCleared}>
                {currentModalimg === 1 && <><Styledh1>{nameArr[0]}</Styledh1><StyledModalImage alt={altArr[0]} src={photoArr[0]}/></>}
                {currentModalimg === 2 && <><Styledh1>{nameArr[1]}</Styledh1><StyledModalImage alt={altArr[1]} src={photoArr[1]}/></>}
                {currentModalimg === 3 && <><Styledh1>{nameArr[2]}</Styledh1><StyledModalImage alt={altArr[2]} src={photoArr[2]}/></>}
            </StyledBackDrop>
            }
        </>
    )
}
// left
const StyledGroupLeft = styled.div`
@media (min-width: 900px){
width: 20%;
position: absolute;
animation: floatLeft;
animation-duration: 2s;
top: 30%;
margin-right: 100%;
margin-left: 55%;
}
@media (max-width: 900px){
    width: 20%;
    position: absolute;
    animation: floatLeft;
    animation-duration: 2s;
    top: 70%;
    margin-left: 25%;
    margin-right: 25%;
    }
`
// right
const StyledGroupRight = styled.div`
@media (min-width: 900px){
width: 20%;
position: absolute;
animation: floatRight;
animation-duration: 2s;
top: 30%;
margin-left: 5%;
margin-right: 100%;
}
@media (max-width: 900px){
    width: 20%;
    position: absolute;
    animation: floatRight;
    animation-duration: 2s;
    top: 35%;
    margin-left: 25%;
    margin-right: 25%;
    }
`
// down
const StyledGroupCenter = styled.div`
@media (min-width: 900px){
width: 20%;
position: absolute;
animation: floatUp;
animation-duration: 2s;
top: 30%;
margin-left: 30%;
margin-right: 100%;
}
@media (max-width: 900px){
    width: 20%;
    position: absolute;
    animation: floatUp;
    animation-duration: 2s;
    top: 5%;
    margin-left: 25%;
    margin-right: 25%;
    }
`
const StyledDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
const Styledh1 = styled.p`
@media (min-width: 900px){
    margin-top: 5%;
    font-size: 22px;
}
@media (max-width: 900px){
    margin-top: 5%;
    font-size: 18px;
}   
`
const StyledPhoto = styled.img`
@media (min-width: 900px){
    width: 100%;
}
@media (max-width: 900px){
    width: 140px;
}
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
const StyledBackDrop = styled.div`
background-color: rgba(0,0,0,0.6);
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
`
const StyledModalImage = styled.img`
width: 48%;
`
export default Lightbox