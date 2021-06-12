import React,  { useContext } from 'react'
import styled from 'styled-components'
import PageError from '../../pages/PageError'
import { CommingDataContext } from '../context/CommingDataContext'
import HeroColumn from './SecondHero/HeroColumn'

const SmallHeroContainer = styled.div `
    grid-area: 6 / 1 / 8 / 3;
    @media screen and (max-width: 768px){
        grid-area: 11 / 1 / 13 / 4;
    }

    @media screen and (max-width: 500px){
        grid-area: 9 / 1 / 10 / 4;
    }
`

const TechnologyHero = () => {
    const {resdata, storedstate, smallWindow } = useContext(CommingDataContext)
    let articles = storedstate.technology.articles
    let technologyLoading = storedstate.technologyLoading
    let error = storedstate.error

    return (
        <SmallHeroContainer>
        {
            technologyLoading? 
            "loading...." :
            error? <PageError error={error} /> : 
            <HeroColumn
                size={smallWindow? "small" : "medium" }
                categoryName="technology"
                type={smallWindow? "main" : "header" }
                categoryHeader={true}
                imgs={
                    [
                        articles[3].urlToImage, 
                        articles[6].urlToImage, 
                        articles[9].urlToImage, 
                        articles[10].urlToImage, 
                        articles[5].urlToImage, 
                        articles[7].urlToImage
                    ]
                }
                captions={
                    [
                        articles[3].title, 
                        articles[6].title, 
                        articles[9].title, 
                        articles[10].title, 
                        articles[5].title, 
                        articles[7].title
                    ]
                }
                publishedAt={
                    [
                        articles[3].publishedAt, 
                        articles[6].publishedAt, 
                        articles[9].publishedAt, 
                        articles[10].publishedAt, 
                        articles[5].publishedAt, 
                        articles[7].publishedAt
                    ]
                }
                urls={
                    [
                        articles[3].url, 
                        articles[6].url, 
                        articles[9].url, 
                        articles[10].url, 
                        articles[5].url, 
                        articles[7].url
                    ]
                }
            />
            
        }
        </SmallHeroContainer>
        
    )
}

export default TechnologyHero
