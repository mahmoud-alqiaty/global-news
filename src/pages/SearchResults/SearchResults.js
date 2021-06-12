import React, {useContext} from 'react'
import styled from 'styled-components'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { AllLoadingData } from '../AllLoadingData'
import PageError from '../PageError'

export const SearchResultsContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #eee;
    margin: 100px auto;
`

const SmallHeroContainer = styled.div `
    grid-area: 1 / 1 / 3 / 3;
`

const SearchResults = () => {
    const {resdata} = useContext(CommingDataContext)

    let articles = resdata.search.articles
    let searchLoading = resdata.searchLoading
    let error = resdata.error
    
    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]
    AllLoadingData(searchLoading, articles, imgs, captions, publishedAt, urls)

    return (
        <SearchResultsContainer>
            <SmallHeroContainer>
                {
                    searchLoading? 
                    "loading...." :
                    error? <PageError error={error} /> :
                    <HeroColumn
                        size="medium"
                        notfound={true}
                        categoryName="Search-Results posts "
                        type="main"
                        categoryHeader={true}
                        imgs={imgs}
                        captions={captions}
                        publishedAt={publishedAt}
                        urls={urls}
                    />
                    
                }
            </SmallHeroContainer>
        </SearchResultsContainer>
    )
}

export default SearchResults
