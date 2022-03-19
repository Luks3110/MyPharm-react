import React, { useState } from 'react'
import { NavbarContainer, 
  LeftContainer, 
  RightContainer, 
  NavbarInnerContainer, 
  NavbarExtendedContainer, 
  NavbarLinkContainer, 
  NavbarLink, 
  Logo,
  OpenLinksButton, 
  NavbarLinkExtended} from '../styles/Navbar.style'
import { Link } from "react-router-dom"
import Products from './Products'
import Brands from './Brands'
import Categories from './Categories'
import Logout from './Logout'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (  
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                {isLoggedIn && <>
                  <NavbarLink to="/products" element={<Products />}>Products</NavbarLink>
                    <NavbarLink to="/categories" element={<Categories />}>Categories</NavbarLink>
                    <NavbarLink to="/brands" element={<Brands />}>Brands</NavbarLink>
                    </>
                }
                  {!isLoggedIn && 
                  <>
                    <NavbarLink to="/login">Login</NavbarLink>
                    <NavbarLink to="/register">Registrar</NavbarLink>
                  </>
                  }
                  <OpenLinksButton onClick={() => {
                    setExtendNavbar((current) => !current)
                  }} > {extendNavbar ? <>&#10005;</> : <>&#8801;</>}</OpenLinksButton>
                </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
              <NavbarLink to="/logout" element={<Logout />}>Logout</NavbarLink>
              <Logo src="https://www.mypharma.com.br/wp-content/uploads/2021/05/logo-mypharma-negativa.png" />
            </RightContainer>
            </NavbarInnerContainer>
           {extendNavbar && (
           <NavbarExtendedContainer>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Products</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Categories</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Brands</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Logout</NavbarLinkExtended>
            </NavbarExtendedContainer>)}
    </NavbarContainer>
  )
}

export default Navbar