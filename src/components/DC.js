import React from 'react'
import styled from 'styled-components'


function DC() {
  return (
    <Container>
       <h1>DC Movies</h1>
       <Content>
           <Wrap>
           <img src='/images/dc/aquaman.jpg' alt='antman'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/joker.jpg' alt='spiderman'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/batman.jpg' alt='iron-man'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/ww.jpg' alt='black widow'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/superman.webp' alt='antman'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/League.jpg' alt='spiderman'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/squad.jpg' alt='iron-man'/>
           </Wrap>

           <Wrap>
           <img src='/images/dc/batman-begin.jpg' alt='black widow'/>
           </Wrap>
       </Content>
    </Container>
  )
};

export default DC


const Container = styled.div`
    h1{
        text-align: center;
        padding-top: 30px;
    }
`


const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`


const Wrap = styled.div`
    cursor: pointer;
    border-radius: 1px;
    border: 1px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        border-radius: 1px;
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        /* border-color: rgba(249, 249, 249, 0.8); */
    }
`
