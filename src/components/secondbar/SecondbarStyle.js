import { Link } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai'
import {FaNewspaper} from 'react-icons/fa'

export const SecondbarContainer = styled.div `
    width: 100%;
    height: 50px;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: relative;

    @media screen and (max-width: 992px){
        
    }
    
    @media screen and (max-width: 500px){
        padding: 0 20px;
    }
`
export const SecondbarLogo= styled(Link) `
    width: 100px;
    padding-right: 3px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid #fff;
    color: #fff;
    font-family: 'Odibee Sans', cursive;
    font-size: 28px;

`
export const LogoIcon= styled(FaNewspaper)`
    color: blue;
    background-color: #fff;
    border-right: 1px solid #fff;
    width: 40px;
`
export const SecondbarMenu= styled.div`
    width: 85%;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 992px){
        position: fixed;
        width: 250px;
        height: 100vh;
        padding: 0 30px;
        left:${({showSidebar})=> showSidebar? "0": "-100%"};
        top: 80px;
        /* z-index: 100; */
        grid-auto-flow: row;
        grid-auto-rows: 50px;
        background-color: blueviolet;
        transition: 0.3s;
    }
`
export const SecondbarLink= styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;

    @media screen and (max-width: 1024px){
        font-size: 14px;
    }
`
export const SecondbarSearchIcon= styled(AiOutlineSearch)`
    color: #fff;
    text-align: end;
`


export const SearchForm = styled.div `
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 5px 15px;
    input{
        border: none;
        outline: none;
        background-color: transparent;
        color: #eee;
        width: 100px;
        
    }
`

export const MenuIcon = styled.div `
    color: #fff;
    cursor: pointer;
`