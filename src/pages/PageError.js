import React from 'react'
import { CategoryPageContainer } from './PageStyle'

const PageError = ({error}) => {
    return (
        <CategoryPageContainer>
            <h1>{error}</h1>
        </CategoryPageContainer>
    )
}

export default PageError
