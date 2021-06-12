import React, { useContext } from 'react'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { AllLoadingData } from '../AllLoadingData'
import PageError from '../PageError'
import { CategoryPageContainer } from '../PageStyle'


const Health = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.health.articles
    let healthLoading = storedstate.healthLoading
    let error = storedstate.error

    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]

    AllLoadingData(healthLoading, articles, imgs, captions, publishedAt, urls)

    return (
        <CategoryPageContainer>
            {
                healthLoading? 
                "loading...." :
                error? <PageError error={error} /> : 
                <HeroColumn
                    size="small"
                    categoryName="health"
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

export default Health
