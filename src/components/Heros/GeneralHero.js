import React, {useContext} from 'react'


import styled from 'styled-components'
import Card from '../card/Card'
import { CommingDataContext } from '../../components/context/CommingDataContext';
import PageError from '../../pages/PageError';


const GeneralHeroContainer = styled.div `
    width: 100%;
    padding: 0 30px;
    margin: 100px 0 20px;
    @media screen and (max-width: 500px){
        padding: 0 20px;
    }

    .Section{
        display: grid;
        grid-gap: 5px;
        margin-bottom: 5px;
        grid-template-rows: 250px;
    }
    .firstSection{
        grid-template-columns: repeat(2, 1fr);
    }

    .secondSection{
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px){
        .firstSection{
        grid-template-columns: repeat(1, 1fr);
        }

        .secondSection{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 500px){
        .firstSection{
            grid-template-columns: repeat(1, 1fr);
        }

        .secondSection{
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

const GeneralHero = () => {
    const {resdata, storedstate} = useContext(CommingDataContext)

    let articles = storedstate.genaral.articles
    let genaralLoading = storedstate.genaralLoading
    let error = storedstate.error

    return (
        <GeneralHeroContainer>
            {
                genaralLoading? 
                "loading...." :
                error!==""? <PageError error={error} /> : 
                <>
                    <div className="firstSection Section">
                        <Card 
                            type="main" 
                            img={articles[0].urlToImage}
                            title={articles[0].title}
                            time={articles[0].publishedAt}
                        />
                        <Card 
                            type="main" 
                            img={articles[1].urlToImage}
                            title={articles[1].title}
                            time={articles[1].publishedAt}
                            url={articles[1].url}
                        />
                    </div>
                    <div className="secondSection Section">
                        <Card 
                            type="main" 
                            img={articles[2].urlToImage}
                            title={articles[2].title}
                            time={articles[2].publishedAt}
                        />
                        <Card 
                            type="main" 
                            img={articles[3].urlToImage}
                            title={articles[3].title}
                            time={articles[3].publishedAt}
                        />
                        <Card 
                            type="main" 
                            img={articles[4].urlToImage}
                            title={articles[4].title}
                            time={articles[4].publishedAt}
                        />
                    </div>
                </>
            }
        </GeneralHeroContainer>
    )
}

export default GeneralHero
