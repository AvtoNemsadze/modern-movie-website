import React from 'react'
import styled from 'styled-components'


function Viewers() {
  return (
    <>
    <Text>
      <h1>Entertainment media</h1>
    </Text>

    <Container>
       <Wrap>
        <img src='/images/viewers-disney.png' alt='disney'/>
       </Wrap>

       <Wrap>
        <img src='/images/viewers-national.png'  alt='ng'/>
       </Wrap>

       <Wrap>
        <img src='/images/viewers-pixar.png'  alt='pixar' />
       </Wrap>

       <Wrap>
        <img src='/images/viewers-starwars.png'  alt='starwars' />
       </Wrap>

       <Wrap>
        <img src='/images/viewers-marvel.png'  alt='marvel' />
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
    border: 1px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1);
        border-color:rgba(249, 249, 249, 0.8);
    }
`

const Text = styled.div`
  text-align: center;
  padding-top: 30px;
`