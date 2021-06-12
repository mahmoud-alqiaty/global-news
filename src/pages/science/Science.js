import React, { useContext } from 'react'
import { CommingDataContext } from '../../components/context/CommingDataContext'
import HeroColumn from '../../components/Heros/SecondHero/HeroColumn'
import { AllLoadingData } from '../AllLoadingData'
import PageError from '../PageError'
import { CategoryPageContainer } from '../PageStyle'


const Science = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)
    let articles = storedstate.science.articles
    let scienceLoading = storedstate.businessLoading
    let error = storedstate.error

    let imgs = []
    let captions= []
    let publishedAt=[]
    let urls=[]

    AllLoadingData(scienceLoading, articles, imgs, captions, publishedAt, urls)

    return (
        <CategoryPageContainer>
            {
                scienceLoading? 
                "loading...." :
                error? <PageError error={error} /> : 
                <HeroColumn
                    size="small"
                    categoryName="science"
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

export default Science
