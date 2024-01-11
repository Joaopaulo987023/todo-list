import styled, { createGlobalStyle } from "styled-components";
import {media} from './media';


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme})=>theme.fontPadrao};
        outline: none;
        color: ${({theme})=>theme.colors.texto};
        
        
    }
    body{
        background:${(props)=>props.theme.colors.background};
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        
        

        
    }

`
export const Titulo=styled.h1`
    margin-bottom:1.25rem;
    font-weight: bold;
    ${media.mobile`
        font-size:1.5rem;
    
    `}
`


export const Container = styled.div`
    width: 31rem;
    margin:6.25rem auto 0 auto;
    background: ${({theme})=>theme.colors.container};
    align-items: center;
    border-radius: 10px;
    padding: 1.25rem;
    text-align: center;

    ${media.mobile`
        width: 90vw;
        justify-content: center;
        align-items: center;
       
        
    
    `}

    ${media.tablet`
       width: 80vw;
       text-align:center;
    
    `}

    
`


export const ClearAll = styled.button`
     margin-top: 20px;
     border: none;
     border-radius: 5px;
     height: 2.5rem;
     background-color:#424769;
     font-size: 1rem;
     color: #fff;
     cursor: pointer;
     font-weight:bold;
     width: 10rem;

     &:hover{
        opacity: 0.8;
     }
`


