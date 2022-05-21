import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import {FcFilmReel} from 'react-icons/fc'
import styled from 'styled-components';
import { Outlet, NavLink } from "react-router-dom";


const ItemList = () => {
    return(
      <>
      <NavLink to='/' style={{borderBottom:'none', textDecoration:'none'}}>
          <p><a style={{color:'orangered'}}>Home</a></p>
      </NavLink>
        <p><a>Search</a></p>
        <p><a>Characters</a></p>
        <p><a>DC</a></p>
        <p><a>Marvel</a></p>
        <p><a>Entertainment </a></p>
      </>
      )
  }

  
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <>
    <Container>
      <NavLinksContainer>
      <NavLink to='/' style={{borderBottom:'none'}}>
        <HomeIcon>
          <img src='https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-06-512.png' />
        </HomeIcon>
      </NavLink>

        <Items>
          <ItemList /> 
        </Items>
      </NavLinksContainer>

      <SignInBtn>
        <NavLink to='login' style={{borderBottom:'none', textDecoration:'none'}}>
          <Btn><p>Sign In</p></Btn>
        </NavLink>
      </SignInBtn>

      <FilmIcon>
        <FcFilmReel style={{fontSize: '50px'}} />     
      </FilmIcon>


      <NavbarMenu>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={29} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={29} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          
            <NavItemContainer>
                <ItemList />
            </NavItemContainer>
        )}
      </NavbarMenu>
    </Container>
    <Outlet />
  </>
  )
}

export default Navbar



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 6rem;
  background: #051225;

  a{
  color: rgb(219, 16, 111);

  :hover{
        border-bottom: 3px solid white;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
}
`


const NavLinksContainer = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

const HomeIcon = styled.div`
    margin-right: 3rem;
    margin-left: -2rem;
    height:55px;
    width: 55px;
    color: purple;
    display: flex;

    @media screen and (max-width: 1050px) {
      margin-left: -80px;
      justify-content: space-between;

}
`

const Items = styled.div`
  display: flex;
  flex-direction: row;

  p {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  margin: 0 1rem;
  cursor: pointer;
}

  @media screen and (max-width: 850px) {
    display: none;
}
`

// second

const FilmIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 850px) {
      display: none;
  }
`

const NavbarMenu = styled.div`
  display: none;
  position: relative;
  margin-left: 190px;


  @media screen and (max-width: 850px) {
    display: flex;
    cursor: pointer;
    z-index: 1;
  }
`

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  background: #031B34;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 40px;
  margin-top: 1rem;
  margin-left: 150px;
  min-width: 220px;
  border-radius: 5px;
  box-shadow: 1px 0px 5px rgba(0,0, 0,0.2);
  align-items: center;

  a {
  color: rgb(219, 16, 111);
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  cursor: pointer;
  }
`


const SignInBtn = styled.div`
    margin-right: 20px;
`

const Btn = styled.button`
    border: none;
    width: 140px;
    height: 50px;
    color: #FF5733;
    z-index: 1;
    display: flex;
    background: #051225;
    position: relative;
    cursor: pointer;

 p {
 margin: 0 auto;
 align-self: center;
 font-size: 20px;
 font-weight: bold;
 text-align: center;
}

::after {
 position: absolute;
 content: "";
 width: 100%;
 z-index: -1;
 height: 10%;
 bottom: 0;
 clip-path: polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
 background: purple;
 transition: 0.2s ease;
}

::before {
 position: absolute;
 content: "";
 transform: rotate(180deg);
 width: 100%;
 height: 10%;
 transition: 0.2s ease;
 z-index: -1;
 clip-path: polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
 background: #8792eb;
}

:hover::after {
 clip-path: polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
 height: 80%;
}

:hover::before {
 clip-path: polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
 height: 80%;
}


  @media screen and (max-width: 750px) {
      display: none;
  }
`

