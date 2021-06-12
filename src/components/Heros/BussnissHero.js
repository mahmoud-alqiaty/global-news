import React,  { useContext } from 'react'
import styled from 'styled-components'
import PageError from '../../pages/PageError'
import { CommingDataContext } from '../context/CommingDataContext'
import HeroColumn from './SecondHero/HeroColumn'

const SmallHeroContainer = styled.div `
    grid-area: 1 / 1 / 2 / 2;

    @media screen and (max-width: 768px){
        grid-area: 1 / 1 / 3 / 3;
    }
    @media screen and (max-width: 500px){
        grid-area: 1 / 1 / 2 / 4;
    }
`

const BussnissHero = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    
    let articles = storedstate.business.articles
    let businessLoading = storedstate.businessLoading
    let error = storedstate.error

    return (
        <SmallHeroContainer>
        {
            businessLoading? 
            "loading...." :
            error? <PageError error={error} /> :
            <HeroColumn
                size="small"
                categoryName="business"
                type="main"
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

export default BussnissHero
