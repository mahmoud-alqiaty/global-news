import React, { useContext } from 'react'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { AllLoadingData } from '../AllLoadingData'
import PageError from '../PageError'
import { CategoryPageContainer } from '../PageStyle'


const Technology = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.technology.articles
    let technologyLoading = storedstate.technologyLoading
    let error = storedstate.error

    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]
    
    AllLoadingData(technologyLoading, articles, imgs, captions, publishedAt, urls)


    return (
        <CategoryPageContainer>
            {
                technologyLoading? 
                "loading...." :
                error? <PageError error={error} /> : 
                <HeroColumn
                    size="small"
                    categoryName="technology"
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

export default Technology
