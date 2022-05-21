import React from 'react'
import styled from 'styled-components'


function Viewers() {
  return (
    <>
    <Text>
      <h1>Watching online</h1>
    </Text>


    <Container>
       <Wrap>
        <img src='./assets/icons/socicon.png' alt='icon'/>
       </Wrap>

       <Wrap>
        <img src='./assets/icons/icon3.png' alt='icon'/>
       </Wrap>

       <Wrap>
        <img src='./assets/icons/icon2.png' alt='icon'/>
       </Wrap>
       
       <Wrap>
        <img src='./assets/icons/icon4.png' alt='icon'/>
       </Wrap>

       <Wrap>
        <img src='./assets/icons/icon5.png' alt='icon'/>
       </Wrap>
    </Container>
    </>
  )
}
export default Viewers


const Container = styled.div`
    margin-top: -15px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns:repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    border: 0px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 80%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.07);
        border-color:rgba(249, 249, 249, 0.8);
    }
`

const Text = styled.div`
  text-align: center;
  padding-top: 30px;
`

