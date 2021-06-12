import React from 'react'
import styled, { css } from 'styled-components'
import Card from '../../card/Card'


export const HeroColumnContainer = styled.div `
   .home_category{
       display: inline-block;
       padding: 5px 10px;
       color: #fff;
       background-color: #000;
       text-transform: uppercase;
       font-family: 'Roboto', sans-serif;
       letter-spacing: 3px;
       position: relative;
       font-weight: 500;

       ::after{
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            left: 50%;
            top: 105%;
            transform: translateX(-50%);
            border-top: 10px solid #000;
            border-right: 10px solid #eee;
            border-bottom: 10px solid #eee;
            border-left: 10px solid #eee;
       }

   }

`
export const BorderLine = styled.div `
    width: 100%;
    height: 2px;
    margin-bottom: 25px;
    background-color: #000;
`
const ColumnContent = styled.div `
    width: 100%;

    ${({size})=>size==="medium"&& css `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;

        .smallCards{
            margin-top: 25px;
        }
   `}

    .smallCards{
        width: 100%;
        margin-top: 25px;
    }
`
const HeroColumn = ({size, notfound, categoryName ,type, categoryHeader, imgs, captions, publishedAt, urls}) => {

    const copyedArry = [...imgs]
    imgs.shift()
    return (
        <HeroColumnContainer size={size} notfound={notfound}>
            <h4 className="home_category">
                {categoryName}
            </h4>
            <BorderLine />
            <ColumnContent size={size} notfound={notfound}>
                <Card
                    size={size} 
                    type={type}
                    categoryHeader={categoryHeader} 
                    img={copyedArry[0]}
                    title={captions[0]}
                    time={publishedAt[0]}
                    url={urls[0]}
                    notfound={notfound}
                />

                <div className="smallCards"  size={size} imgs={imgs}>
                {   
                
                    imgs.map((item, index)=>
                        <Card 
                            type="normal"
                            size={size}
                            img={imgs[index]}
                            title={captions[index+1]}
                            time={publishedAt[index+1]}
                            url={urls[index+1]}
                            key={index}
                        />
                    )
                }
                </div>
            </ColumnContent>
        </HeroColumnContainer>
    )
}

export default HeroColumn
