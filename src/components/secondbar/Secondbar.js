import React, { useContext, useState, useEffect } from 'react'
import { CommingDataContext } from '../context/CommingDataContext'
import { Categories } from './SecondbarData'
import { SecondbarContainer, SecondbarLogo, SecondbarSearchIcon, LogoIcon, SecondbarMenu, SecondbarLink, SearchForm, MenuIcon } from './SecondbarStyle'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'

const Secondbar = () => {
    const { searcheddata } = useContext(CommingDataContext)
    const [searchword, setSearchword] = useState("")
    const [showSidebar, setShowSidebar] = useState(false)
    const [mediumWindow, setMediumWindow] = useState(false)
    
    const handleMediumWindow = ()=>{
        if(window.innerWidth < 992){
            setMediumWindow(true)
        }
        else{
            setMediumWindow(false)
        }
    }

    useEffect(() => {
        handleMediumWindow()
    }, [])
    window.addEventListener('resize', handleMediumWindow)

    const toggleSidebar = ()=>{
        setShowSidebar(!showSidebar)
    }

    return (
        <SecondbarContainer>
            <SecondbarLogo to="/">
                <LogoIcon />
                <span>Qnews</span>
            </SecondbarLogo>
            <SecondbarMenu showSidebar={showSidebar}>
                {
                    Categories.map(({title, path}, index)=>
                        <SecondbarLink key={index} to={path}>
                            {
                                title
                            }
                        </SecondbarLink>
                    )
                }

                <SearchForm>
                    <input type="text" value={searchword} onChange={(e)=>setSearchword(e.target.value)} />
                    <SecondbarLink to="/search">
                        <SecondbarSearchIcon onClick={()=>searcheddata(searchword)} />
                    </SecondbarLink>
                </SearchForm>
            </SecondbarMenu>
            {
                mediumWindow?
                <MenuIcon onClick={toggleSidebar}>
                    {
                        showSidebar? <GrClose /> : <AiOutlineMenu />
                    }
                    
                </MenuIcon> :
                null
            }
        </SecondbarContainer>
    )
}

export default Secondbar
