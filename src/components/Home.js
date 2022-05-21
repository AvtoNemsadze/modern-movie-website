import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Characters from './Characters'
import Marvel from './Marvel'
import Viewers from './Viewers'
import DC from './DC'
import Footer from './Footer'
import MovieIcons from './MovieIcons'
import Roll from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';


function Home() {
    return (
        <Container> 
            <LightSpeed top>
                <ImgSlider />
            </LightSpeed>

            <Characters />
            <Marvel />
            <DC />
            
            <Roll left>
                <Viewers />
            </Roll>

            <Roll right>
                <MovieIcons />
            </Roll>

            <Roll top>
                <Footer />
            </Roll>
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background-color: rgb(12, 12, 32);
        // background: url("/images/home-background.png") center center / cover no-repeat fixed;        
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`