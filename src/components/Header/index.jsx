import React, { useContext } from 'react'
import { Container, StyledHeader } from './stylesHeader'
import SearchBar from '../SearchBar'
import CartButton from '../CartButton'


export default function Header() {
 
  
  return (
    <StyledHeader>
        <Container>
          <SearchBar/>
            <CartButton />
        </Container>

    </StyledHeader>
  )
}
