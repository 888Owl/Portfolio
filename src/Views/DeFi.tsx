import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3';
import Container from './Components/Container'

const DeFi: React.FC = () => {
    const [account, setAccount] = useState('')
    const [currentHash, setCurrentHash] = useState('')

   const loadBlockChain = async () => {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000' || 'https://www.terminowl.com/dapps')
        const currBlock = await web3.eth.getBlockNumber()
        const accounts = await web3.eth.getAccounts()
        setCurrentHash(currBlock.toLocaleString())
        setAccount(accounts[0])
      }
    
    useEffect(() => {
        loadBlockChain()
      }, [])

    return (
        <Container>
        <StyledHeader>Dapps</StyledHeader>
        {account !== '' || account === undefined ? <StyledHeader>Your Address: <StyledExternalLink href={`https://etherscan.io/address/${account}`}>{account}</StyledExternalLink></StyledHeader> : ''}
        {account !== '' || account === undefined ? <StyledHeader2><StyledExternalLink href='https://etherscan.io/block/0'>First Ethereum Block</StyledExternalLink> </StyledHeader2>: ''}
        {account !== '' || account === undefined ? <StyledHeader2><StyledExternalLink href={`https://etherscan.io/block/${currentHash}`}>Current Ethereum Block</StyledExternalLink> </StyledHeader2>: ''}
        <br/>
        <StyledHeader2>In order to view most of the data on these sites you will need <br/>
            to have an Ethereum compatible wallet such as <StyledExternalLink href="https://metamask.io/">MetaMask</StyledExternalLink>
            </StyledHeader2>
        <StyledInnerContainer>
        <StyledInnerGrouping>
        <StyledExternalLink href="https://stake.zombie.finance/">Zombie.Finance</StyledExternalLink>
        <StyledExternalLink href="https://github.com/Zombie-Finance/zombie-protocol">Github</StyledExternalLink>
        </StyledInnerGrouping>
        <HorizontalSpacer />
        <StyledInnerGrouping>
        <StyledExternalLink href="https://shrimp.finance/">Shrimp.Finance</StyledExternalLink>
        <StyledExternalLink href="https://github.com/shrimp-finance/shrimp-protocol">Github</StyledExternalLink>
        </StyledInnerGrouping>
        <StyledInnerGrouping>
        <StyledExternalLink href="https://dice.finance/">Dice.Finance</StyledExternalLink>
        <StyledExternalLink href=''>Code is not open source.</StyledExternalLink>
        </StyledInnerGrouping>
        </StyledInnerContainer>
        </Container>
    )
}

const StyledInnerContainer = styled.div`
display: flex;
flex-flow: row;
margin-top: 40px;
justify-content: space-around;
justify-items: space-around;
width: 100%;
height: 15%;
`

const StyledInnerGrouping = styled.div`
width: 40%;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledHeader = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`

const StyledHeader2 = styled.h4`
    text-align: center;
`

const StyledExternalLink = styled.a`
text-decoration: none;
color: yellow;
padding: 1px;
&:hover {
    background-color: white;
    color: #006464;
}
`
const HorizontalSpacer = styled.div`
width: 15px;
`


export default DeFi