import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BorderLine, HeroColumnContainer } from './SecondHero/HeroColumn'
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPinterestP} from 'react-icons/fa'
import {TiSocialYoutubeCircular, TiSocialGooglePlusCircular, TiSocialSkypeOutline} from 'react-icons/ti'

const SmallHeroContainer = styled.div `
    grid-area: 2 / 3 / 3 / 4;

    @media screen and (max-width: 768px){
        grid-area: 1 / 3 / 2 / 4;
    }
    @media screen and (max-width: 500px){
        grid-area: 4 / 1 / 5 / 4;
    }
`

const SocialContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    .link{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        padding: 10px;
        color: #fff;
        font-size: 20px;
    }

    .facebook{
        background-color: #3b5999;
    }
    .twitter{
        background-color: #55acee;
    }
    .instagram{
        background-color: #e4405f;
    }
    .whatsapp{
        background-color: #25D366;
    }
    .pinterest{
        background-color: #bd081c;
    }
    .youtube{
        background-color: #cd201f;
    }
    .googlePlus{
        background-color: #dd4b39;
    }
    .skype{
        background-color: #00AFF0;
    }
`



const SocialMediaHero = () => {

    return (
        <SmallHeroContainer>
            <HeroColumnContainer>
                <h4 className="home_category">
                    Social Plugin
                </h4>
                <BorderLine />

                <SocialContainer>
                    <Link to="#" className="link facebook">
                        <FaFacebookF />
                    </Link>
                    <Link to="#" className="link twitter">
                        <FaTwitter />
                    </Link>
                    <Link to="#" className="link instagram">
                        <FaInstagram />
                    </Link>
                    <Link to="#" className="link whatsapp">
                        <FaWhatsapp />
                    </Link>
                    <Link to="#" className="link pinterest">
                        <FaPinterestP />
                    </Link>
                    <Link to="#" className="link youtube">
                        <TiSocialYoutubeCircular />
                    </Link>
                    <Link to="#" className="link googlePlus">
                        <TiSocialGooglePlusCircular />
                    </Link>
                    <Link to="#" className="link skype">
                        <TiSocialSkypeOutline />
                    </Link>
                </SocialContainer>

            </HeroColumnContainer>
        </SmallHeroContainer>
        
    )
}

export default SocialMediaHero
