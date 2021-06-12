import React,  { useContext } from 'react'
import styled from 'styled-components'
import PageError from '../../pages/PageError'
import { CommingDataContext } from '../context/CommingDataContext'
import HeroColumn from './SecondHero/HeroColumn'

const SmallHeroContainer = styled.div `
    grid-area: 3 / 3 / 4 / 4;
    @media screen and (max-width: 768px){
        grid-area: 2 / 3 / 3 / 4;
    }
    @media screen and (max-width: 500px){
        grid-area: 5 / 1 / 6 / 4;
    }
`

const PapularHero = () => {
    
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.popular.articles
    let popularLoading = storedstate.popularLoading
    let error = storedstate.error

    return (
        <SmallHeroContainer>
        {
            popularLoading? 
            "loading...." :
            error? <PageError error={error} /> : 
            <HeroColumn
                size="small"
                notFound={true}
                categoryName="popular posts "
                type="normal"
                categoryHeader={true}
                imgs={ 
                    [
                        articles[0].urlToImage, 
                        articles[1].urlToImage, 
                        articles[2].urlToImage,
                        articles[3].urlToImage,
                    ]
                }
                captions={[
                    articles[0].title, 
                    articles[1].title, 
                    articles[2].title,
                    articles[3].title,
                ]}
                publishedAt={[
                    articles[0].publishedAt, 
                    articles[1].publishedAt, 
                    articles[2].publishedAt, 
                    articles[3].publishedAt, 
                    ]
                }
                urls={[
                    articles[0].url, 
                    articles[1].url, 
                    articles[2].url, 
                    articles[3].url
                    ]
                }
            />
            
        }
        </SmallHeroContainer>
        
    )
}

export default PapularHero


