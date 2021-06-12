import React from 'react'
import { TopbarSocialsData } from '../navbar/topbar/TopbarData'
import { TopbarLink, TopbarList } from '../navbar/topbar/TopbarStyle'
import { LogoIcon, SecondbarLogo } from '../secondbar/SecondbarStyle'

import {FooterContainer} from './FooterStyles'
const Footer = () => {
    return (
        <FooterContainer>
            <SecondbarLogo to="/">
                <LogoIcon />
                <span>Qnews</span>
            </SecondbarLogo>

            <TopbarList>
                {
                    TopbarSocialsData.map(({icon, link}, index)=>
                        <TopbarLink key={index} to={link}>
                            {icon}
                        </TopbarLink>
                    )
                }
            </TopbarList>
        </FooterContainer>
    )
}

export default Footer
