import React from 'react'
import styled from 'styled-components'
import LoginIcons from '../container/LoginIcons'


function Login() {
  return (
    <Container>
      <Box>
      <div className='main-login'>
       <div className="background">
        <div className="shape"></div>
          <div className="shape"></div>
          <form>
          <h3>Sign in</h3>
            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"></input>
            <div className='login-icons'>
                <LoginIcons />
            </div>
            <button className='login-btn'>Sign In</button>
          <div class="social">
          </div>
        </form>
        </div>
      </div>
    </Box>
    </Container>
  )
}

export default Login

const Container = styled.div`
    overflow-x: hidden;
`

const Box = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    background-color: #080814;
    overflow-x: hidden;


    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('login-background.jpg');
  
`