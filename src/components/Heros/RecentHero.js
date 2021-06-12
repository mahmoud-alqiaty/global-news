import React,  { useContext } from 'react'
import styled from 'styled-components'
import PageError from '../../pages/PageError'
import { CommingDataContext } from '../context/CommingDataContext'
import HeroColumn from './SecondHero/HeroColumn'

const SmallHeroContainer = styled.div `
    grid-area: 6 / 3 / 7 / 4;
    @media screen and (max-width: 768px){
        grid-area: 5 / 3 /5 / 4;
    }
    @media screen and (max-width: 500px){
        grid-area: 6 / 1 / 7 / 4;
    }
`

const RecerntHero = () => {
    
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.genaral.articles
    let genaralLoading = storedstate.genaralLoading
    let error = storedstate.error

    return (
        <SmallHeroContainer>
        {
            genaralLoading? 
            "loading...." :
            error? <PageError error={error} /> : 
            <HeroColumn
                size="small"
                notFound={true}
                categoryName="recent posts "
                type="normal"
                categoryHeader={true}
                imgs={[
                    articles[5].urlToImage, 
                    articles[6].urlToImage, 
                    articles[7].urlToImage,
                    articles[8].urlToImage,
                ]}
                captions={[
                    articles[5].title, 
                    articles[6].title, 
                    articles[7].title,
                    articles[8].title,
                ]}
                publishedAt={[
                    articles[5].publishedAt, 
                    articles[6].publishedAt, 
                    articles[7].publishedAt, 
                    articles[8].publishedAt, 
                ]}
                urls={[
                    articles[5].url, 
                    articles[6].url, 
                    articles[7].url, 
                    articles[8].url
                ]}
            />
            
        }
        </SmallHeroContainer>
        
    )
}

export default RecerntHero


