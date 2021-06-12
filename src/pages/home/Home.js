import React from 'react'
import styled from 'styled-components';
import GeneralHero from '../../components/Heros/GeneralHero';
import SecondHero from '../../components/Heros/SecondHero/SecondHero';

const HomeContainer = styled.div `
    width: 100%;
    min-height: 100vh;
`

const Home = () => {
    return (
        <HomeContainer>
            {
                <>
                    <GeneralHero />
                    <SecondHero />
                </>
            }
            
        </HomeContainer>
    )
}
export default Home
