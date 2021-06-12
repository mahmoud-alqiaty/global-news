import React from 'react'
import styled from 'styled-components'
import Secondbar from '../secondbar/Secondbar'
import Topbar from './topbar/Topbar'

const NavbarContainer = styled.div `
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
`
const Navbar = () => {
    return (
        <NavbarContainer>
            <Topbar />
            <Secondbar />
        </NavbarContainer>
    )
}

export default Navbar
