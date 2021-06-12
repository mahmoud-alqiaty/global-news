import React, { useContext } from 'react'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { AllLoadingData } from '../AllLoadingData'
import PageError from '../PageError'
import { CategoryPageContainer } from '../PageStyle'


const Entertainment = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.entertainment.articles
    let entertainmentLoading = storedstate.entertainmentLoading
    let error = storedstate.error

    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]

    AllLoadingData(entertainmentLoading, articles, imgs, captions, publishedAt, urls)

    return (
        <CategoryPageContainer>
            {
                entertainmentLoading? 
                "loading...." :
                error? <PageError error={error} /> : 
                <HeroColumn
                    size="small"
                    categoryName="entertainment"
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

export default Entertainment
