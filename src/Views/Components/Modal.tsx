import React from 'react'
import styled from 'styled-components'

type ModalProps = {
    text: string,
    clicker: Function
}

const Modal: React.FC<ModalProps> = (props) => {
    return (
        <StyledBackDrop>
            <StyledModal>
                <Closer onClick={() => props.clicker()}>&#x02AA4;</Closer>
                {props.text}
            </StyledModal>
        </StyledBackDrop>
    )
}

const StyledBackDrop = styled.div`
background-color: rgba(0,0,0,0.6);
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
`
const Closer = styled.span`
cursor: pointer;
position: absolute;
right: 2%;
top: 2%;
font-size: 2em;
`

const StyledModal = styled.div`
z-index: 3;
background-color: #006464;
width: 50%;
height: 50%;
position: absolute;
top:25%;
left:25%;
display: flex;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
padding: 15px;
`

export default Modal