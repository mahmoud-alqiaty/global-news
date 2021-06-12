import React from 'react'
import styled from 'styled-components'
import BussnissHero from '../BussnissHero'
import EntertainmentHero from '../EntertainmentHero'
import HealthHero from '../HelthHero'
import PapularHero from '../PapularHero'
import RecerntHero from '../RecentHero'
import ScienceHero from '../ScienceHero'
import SocialMediaHero from '../SocialMediaHero'
import SportsHero from '../SportsHero'
import TechnologyHero from '../TechnologyHero'
import VideoNews from '../VideoNews'


const SecondHeroContainer = styled.div `
    width: 100%;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    row-gap: 50px;

    @media  screen and (max-width: 500px){
        padding: 20px;
    }
`
const SecondHero = () => {
    return (
        <SecondHeroContainer>
            <BussnissHero />
            <EntertainmentHero />
            <HealthHero />
            <ScienceHero />
            <SocialMediaHero />
            <PapularHero />
            <SportsHero />
            <TechnologyHero />
            <RecerntHero />
            <VideoNews />
        </SecondHeroContainer>
    )
}

export default SecondHero
