import React, { useContext } from 'react'
import { CommingDataContext } from '../../context/CommingDataContext'
import { TopbarListData, TopbarSocialsData } from './TopbarData'
import { TopbarContainer, TopbarList, TopbarLink } from './TopbarStyle'

    

const Topbar = () => {
    const {smallWindow} = useContext(CommingDataContext)

    return (
        <TopbarContainer>
            <TopbarList>
                {
                    TopbarListData.map((item, index)=>
                        <TopbarLink key={index} to={item.path}>
                            {item.title}
                        </TopbarLink>
                    )
                }
            </TopbarList>
            
            {
                smallWindow? 
                null :
                <TopbarList>
                {
                    TopbarSocialsData.map(({icon, link}, index)=>
                        <TopbarLink key={index} to={link}>
                            {icon}
                        </TopbarLink>
                    )
                }
            </TopbarList>
            }
             </TopbarContainer>
    )
}

export default Topbar
