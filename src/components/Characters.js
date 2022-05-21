import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Viewers() {
  return (
    <MainContainer>
    <Text>
      <h1>Favorite Characters</h1>
    </Text>

     <Link to='/filter'>
     <Container>
       <Wrap>
        <img src='/assets/iron.webp' alt='iron-man'/>
       </Wrap>
       <Wrap>
        <img src='/assets/famous.webp' alt='marvels'/>
       </Wrap>
       <Wrap>
        <img src='/assets/deadpool.webp' alt='deadpools'/>
       </Wrap>
       <Wrap>
        <img src='/assets/marvel.webp' alt='marvel'/>
       </Wrap>
       <Wrap>
        <img src='/assets/spiderman.webp' alt='marvel'/>
       </Wrap>

       <Wrap>
       <img src='/assets/nebula.webp' alt='nebula'/>
       </Wrap>
       <Wrap>
       <img src='/assets/robot.webp' alt='roboto'/>
       </Wrap>
       <Wrap>
       <img src='/assets/antMan.webp' alt='antman'/>
       </Wrap>
       <Wrap>
       <img src='/assets/thanos.webp' alt='thanos'/>
       </Wrap>
       <Wrap>
       <img src='/assets/antMan2.webp' alt='antman2'/>
       </Wrap>
     </Container>
      </Link>
    </MainContainer>
  )
}

export default Viewers

const MainContainer = styled.div`
    margin-top: 25px;
`
const Container = styled.div`
    margin-top: 10px;
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
        transform: scale(1.09);
        border-color:rgba(249, 249, 249, 0.8);
    }
`
const Text = styled.div`
  text-align: center;
  padding-top: 30px;
`