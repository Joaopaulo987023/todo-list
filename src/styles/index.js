import styled, { createGlobalStyle } from "styled-components";
import img from "../img/background.png";
import {media} from './media';
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        outline: none;
        
        
    }
    body{
        background: url(${img});
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        
        

        
    }

`
export const Titulo=styled.h1`
    margin-bottom:1.25rem;
    font-weight: bold;
`


export const Container = styled.div`
    width: 31rem;
    margin:6.25rem auto 0 auto;
    background: #d1d1d1;
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

        ${media.mobile`
            width:16rem;
            height: 2.9rem;
            text-align:center;
        
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
        background-color: #003329;
        color: #ffffff;
        font-size: 1.2rem;
        padding: 0 .9rem;
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

        `}
        ${media.tablet`
            padding: 0 1.9rem;
            height: 3.5rem;
        
        
        `}
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
    background-color: ${(props)=>(props.checked ? "#8fac55":"#f2f2f2")};
    border-radius: 5px;
    color: ${(props)=>(props.checked ? "#ffffff": "#000000")};
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

    ${media.tablet`
        height: 3.5rem;
        
    
    
    `}
    


`