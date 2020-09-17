import React, { useState } from 'react'
import styled from 'styled-components'

const Choices: React.FC = () => {
    const [choice, setChoice] = useState(0)
    const choiceArray = ['Choose wisely and lead the party to safety, choose poorly and no one makes it out alive!']
    const consequencesArray = [`You're party is in a cave, it took hours to get here and you just found a treasure chest but hear creatures approaching quickly.`,
    `Your party left the chest behind, and began running barely making it back into the cave system you came from, and you seee the creatures barely miss grabbing old Benji. Your party traveled for some time and are now at a fork in the tunnels.`,
    `Your party starts running as old Benji grabs the chest he has almost caught up to the party just as he is about to get away the creatures take him down...Does the party go back for old Benji or keep running?`,
    `You're party goes back to fight the creatures only to find out that they are Galphans, the giant lizards had already taken old Benji away and they began looking at the rest of you...Tyler Quailan swings his hammer knocking one of the creatures unconcious but there are still 5 more.`]
    const leftButtonArray = ['Take the chest with you.', 'Take the left tunnel.', 'Fight the monsters to save old Benji.']
    const rightButtonArray = ['Leave the chest.', 'Take the right tunnel.', 'Leave old Benji and run.']
    const choiceMade = function(event: any) {
        console.log(event.target.id)
        const currentChoice = event.target.id;
        if(currentChoice === '1'){
            switch (choice) {
                case 0:
                    setChoice(2)
                    break;
                case 1:
                    setChoice(5)
                    break;
                case 2:
                    setChoice(3)
                    break;
                default:
                    setChoice(0)
                    break;
            }
        } else if(currentChoice === '2'){
            switch (choice) {
                case 0:
                    setChoice(1)
                    break;
                case 1:
                    setChoice(4)
                    break;
                case 2:
                    setChoice(4)
                    break;
                default:
                    setChoice(0)
                    break;
            }
        }
    }

    const rollMade = function() {
        let rollNum = Math.floor(Math.random()*12)
        console.log(rollNum)
        if(rollNum > 6){
            setChoice(4)
        } else {
            setChoice(5)
        } 
    }

    return (
        <StyledContainer>
            <StyledColumn>
                <StyledMessage>{choiceArray}</StyledMessage>
                <StyledUpdate>{consequencesArray[choice]}</StyledUpdate>
                <StyledRow>
                    {choice === 3 ?
                    <StyledButton onClick={rollMade}>Roll a 6 or greater to survive!</StyledButton>
                        :
                        <>
                    <StyledButton id='1' onClick={choiceMade}>{leftButtonArray[choice]}</StyledButton>
                    <StyledSpacer/>
                    <StyledButton id='2' onClick={choiceMade}>{rightButtonArray[choice]}</StyledButton>
                    </>
}
                </StyledRow>
            </StyledColumn>
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
width: 100%;
height: 100%;
background-color: #FFF;
`

const StyledButton = styled.button`
width:30%;
height: 40%;
background-color: #000;
color: #FFF;
border-radius: 12px;
display: flex;
align-items: center;
align-content: center;
justify-items: center;
justify-content: center;
`

const StyledColumn = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-items: center;
justify-content: center;
`

const StyledRow = styled.div`
width:100%;
height: 40%;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
justify-items: center;
justify-content: center;
`

const StyledMessage = styled.h3`
color:#000;
line-height: 1.5;
margin-bottom: 2%;
width: 75%;
`

const StyledUpdate = styled.p`
color:#000;
line-height: 1.5;
width: 50%;
`

const StyledSpacer = styled.div`
width: 24px;
height: 24px;
`
export default Choices