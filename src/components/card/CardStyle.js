import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'


export const CardContainer = styled(Link) `
     display:${({notfound})=> notfound? "none": "block"} ;
    text-decoration: none;

   
    ${({type, size})=> type==="main" && css `
        width: 100%;
        height: 230px;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .captionContainer{
            width: 100%;
            height: 100%;
            padding: 25px;
            color: #FFF;
            background-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            font-family: 'Roboto', sans-serif;
            display: flex;
            /* align-items:${({size})=>size==="small"? "end":"start"} ; */
        }

        p{
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: 10px;
        }

        .time{
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        .time-icon{
            margin-right: 4px;
            font-weight: 700;
        }
    `}

    ${({type})=> type==="header" && css `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        img{
            width: 100%;
            height: 75%;
        }

        .captionContainer{
            width: 100%;
            font-family: 'Roboto', sans-serif;
            display: flex;
            color: #000;
        }

        p{
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: 10px;
        }

        .time{
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            color: #888;
        }
        .time-icon{
            margin-right: 4px;
            font-weight: 700;
        }

    `}

    ${({type})=> type==="normal" && css `
        height: 100px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        img{
            width: 35%;
            height: 80px;
        }

        .captionContainer{
            width: 62%;
            height: 100%;
            font-family: 'Roboto', sans-serif;
        }

        p{
            font-size: 14px;
            font-weight: 500;
            /* line-height: 1.5; */
            margin-bottom: 10px;
            color: #000;
        }

        .time{
            color: #888;
            font-size: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        .time-icon{
            margin-right: 4px;
            font-weight: 700;
        }

        .time-text{
            
        }

        @media screen and (max-width: 992px){
        height: 120px;

        img{
            width: 37%;
            height: 100px;
        }

        .captionContainer{
            width: 60%;
        }

    }
    `}

   

`