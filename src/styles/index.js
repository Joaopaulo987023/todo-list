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

export const Formulario = styled.form`
    ${media.mobile`
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:1em;
    
    `}
    ${media.tablet`
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:1.2rem;
    
    
    `}

    input{
        border: none;
        border-radius: 5px;
        width: 20rem;
        height: 3rem;
        padding-left:.9rem;
        background-color:#fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        ${media.mobile`
            width:16rem;
            height: 2.9rem;
            text-align:center;
            font-size:0.9rem;
            &::placeholder{
                font-size:.9rem;
                text-align:center;
            }
        
        `
        }

        ${media.tablet`
            width: 70vw;
            font-size:1.2em;
            padding-left:.9rem;
            
        
        
        `}
       
    }
    button{
        border: none;
        border-radius: 5px;
        height: 2.9rem;
        background-color: ${({theme})=>theme.colors.botao};
        font-size: 1.2rem;
        padding: 0 .9rem;
        color:#fff;
        float: right;
        cursor: pointer;
        font-weight:bold;
        &:hover{
            opacity: 0.8;
        }

        ${media.mobile`
            height: 2.2rem;
            padding: 0 .5rem;
            font-size:1rem;
            opacity: 1;

        `}
        ${media.tablet`
            padding: 0 1.9rem;
            height: 3.5rem;
        
        
        `}
    }

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
export const Imagem = styled.img`
    height:25px;
    opacity:0;
    transition: opacity 0.5s ease-in-out;
    cursor: pointer;
    ${media.mobile`
        opacity:1;
        height: 1.20rem;

    `}
    ${media.tablet`
        opacity:1;

    
    `}
    
`

export const Lista = styled.ul`
    width: 100%;
    list-style: none;
    margin-top: 30px;
    
    
   
`  
export const ItemLista = styled.li`
    background-color: ${(props)=>props.checked ? "#8fac55":"#ffff"};
    border-radius: 5px;
    color:#000;
    text-decoration: ${(props)=>props.checked ? "line-through" : ""};
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    display: flex;
    height: 3.1rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 20px;
    &:hover img{
        opacity: 1 ;
    }

    ${media.mobile`
        
        padding: 0 15px;
        font-size:.9rem;
    
    `}

    ${media.tablet`
        height: 3.5rem;
        
    
    
    `}
    


`