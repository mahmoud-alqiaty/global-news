import React from 'react'
import styled from 'styled-components'
import {BorderLine} from './SecondHero/HeroColumn'

const SmallHeroContainer = styled.div `
    grid-area: 4 / 3 / 5 / 4;

    .home_category{
       display: inline-block;
       padding: 5px 10px;
       color: #fff;
       background-color: #000;
       text-transform: uppercase;
       font-family: 'Roboto', sans-serif;
       letter-spacing: 3px;
       position: relative;
       font-weight: 500;

       ::after{
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            left: 50%;
            top: 105%;
            transform: translateX(-50%);
            border-top: 10px solid #000;
            border-right: 10px solid #eee;
            border-bottom: 10px solid #eee;
            border-left: 10px solid #eee;
       }
    }

    @media screen and (max-width: 768px){
        grid-area: 3 / 3 / 4 / 4;
    }
    @media screen and (max-width: 500px){
        grid-area: 10 / 1 / 11 / 4;
    }
`

const VideoNews = () => {
    return (
        <SmallHeroContainer>
            <h4 className="home_category">
               Global
            </h4>
            <BorderLine />
            <iframe 
                width="100%"
                height="270px" 
                src="https://www.youtube.com/embed/pqsxjcwQbPI" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </SmallHeroContainer>
    )
}

export default VideoNews
