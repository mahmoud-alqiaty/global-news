import React, { useContext } from 'react'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import { AllLoadingData } from '../AllLoadingData'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { CategoryPageContainer } from '../PageStyle'
import PageError from '../PageError'


const Sports = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.sports.articles
    let sportsLoading = storedstate.sportsLoading
    let error = storedstate.error

    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]
    AllLoadingData(sportsLoading, articles, imgs, captions, publishedAt, urls)
    
    return (
        <CategoryPageContainer>
            {
                sportsLoading? 
                "loading...." :
                error? <PageError error={error} /> :  
                <HeroColumn
                    size="small"
                    categoryName="sports"
                    type="main"
                    categoryHeader={true}
                    imgs={imgs}
                    captions={captions}
                    publishedAt={publishedAt}
                    urls={urls}
                />
                
            }
        </CategoryPageContainer>
    )
}

export default Sports
