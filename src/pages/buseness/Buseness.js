import React, { useContext } from 'react'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { AllLoadingData } from '../AllLoadingData'
import PageError from '../PageError'
import { CategoryPageContainer } from '../PageStyle'


const Buseness = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.business.articles
    let businessLoading = storedstate.businessLoading
    let error = storedstate.error

    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]

    AllLoadingData(businessLoading, articles, imgs, captions, publishedAt, urls)

    return (
        <CategoryPageContainer>
            {
                businessLoading? 
                "loading...." :
                error? <PageError error={error} /> : 
                <HeroColumn
                    size="small"
                    categoryName="business"
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

export default Buseness
