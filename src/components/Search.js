import React from 'react'
import styled from 'styled-components'


function Search() {
  return (
    <Container>
          <Input type="text" placeholder='Search...' />
    </Container>
  )
}

export default Search

const Container = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 80px;
`

const Input = styled.input`
  outline: none;
  padding: 20px 14%;
  border-radius: 15px;
  border: none;
  margin-bottom: 5%;
  background: rgba(250, 250, 250, 0.85);
  font-size: 22px;
`



