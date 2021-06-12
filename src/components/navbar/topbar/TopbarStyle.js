import styled from "styled-components";

import { Link } from "react-router-dom";

export const TopbarContainer = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #7428ba;
    color: #aaa;
    padding: 0 50px;

    @media screen and (max-width: 500px){
        padding: 0 20px;
    }
`
export const TopbarList = styled.div `
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    grid-gap: 20px;
    color: #ccc;
`
export const TopbarLink = styled(Link)`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-transform: capitalize;
`

