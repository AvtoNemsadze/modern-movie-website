import React from 'react'
import styled from 'styled-components'
import Select from '../container/Tabs'
import FooterIcons from '../container/FooterIcons'


function Filter() {
  return (
  <>
    <Container>
      <TextBox>
        <Text>Select your favorite Movies</Text>
      </TextBox>

      <SelectBox>
        <Select />
      </SelectBox>
    </Container>
    
      <FooterBox>
        <FooterIcons />
        <FooterText>All Rights Reserved</FooterText>
      </FooterBox>
  </>
  )
}

export default Filter


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    background-color: rgb(12, 12, 32);
`

const TextBox =styled.div`
    text-align: center;
    margin-top: 20px;
`

const Text = styled.div`
    color: #0fa13b;
    font-size: 25px;
    font-weight: bold;
    font-family:monospace;
`

const SelectBox = styled.div`
    margin-top: 30px;
`

const FooterBox = styled.div`
    padding: 1rem;
    background-color: #0a0714;
    width: 100%;
`
const FooterText = styled.h3`
  color: #359665;
  text-align: center;
  font-size: 27px;
  font-weight: bold;
`