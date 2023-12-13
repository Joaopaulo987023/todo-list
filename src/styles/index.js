import styled, { createGlobalStyle } from "styled-components";
import img from "../img/background.png";
import large from '../img/background-large.png';
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

export const Container = styled.div`
    width: 500px;
    margin:100px auto 0 auto;
    background: #d1d1d1;
    align-items: center;
    border-radius: 10px;
    padding: 20px;


    ${media.mobile`
        width: 300px;
        margin-bottom:20px ;
        
    `}
    ${media.large`
        width: 600px;
        padding: 40px;
    
    
    `}
    
`

export const Formulario = styled.form`
    ${media.mobile`
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
    `}
    ${media.tablet`
        
        display: flex;
        justify-content:center;
        align-items:center;
        gap:20px;
    
    `}

    ${media.large`
        display: flex;
        justify-content:space-between;
    
    `}

    input{
        border: none;
        border-radius: 5px;
        width: 300px;
        height: 40px;
        padding-left:10px;
            
        ${media.mobile`
            width: 200px;
            height: 30px;
            text-align:center;
            margin-top:5px ;
        `}
        ${media.large`
            width: 20rem;
            height: 4rem;
            font-size:1.3rem;
        
        `}
       
    }
    button{
        border: none;
        border-radius: 5px;
        height: 40px;
        background-color: #003329;
        color: #ffffff;
        font-size: 17px;
        padding: 0 15px;
        float: right;
        cursor: pointer;

        ${media.mobile`
            font-size:12px;
            height: 30px;
            padding: 0 10px;
            margin-top:10px;
        `}

        ${media.large`
            font-size:1.5rem;
            height: 4rem;
            font-weight:bold;
        
        `}
        &:hover{
            opacity: 0.8;
        }
    }

`
export const Imagem = styled.img`
    height:25px;
    opacity:0;
    transition: opacity 0.5s ease-in-out;
    cursor: pointer;
    ${media.mobile`
        opacity:1;
        height: 20px;

    `}
    ${media.tablet`
        opacity:1;

    
    `}
    
`

export const Lista = styled.ul`
    width: 100%;
    list-style: none;
    margin-top: 30px;
    ${media.mobile`
        font-size:12px;
        text-align:center;
    `}
`  
export const ItemLista = styled.li`
    background-color: ${(props)=>(props.checked ? "#8fac55":"#f2f2f2")};
    border-radius: 5px;
    color: ${(props)=>(props.checked ? "#ffffff": "#000000")};
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 20px;
    &:hover img{
        opacity: 1 ;
    }
    ${media.large`
        font-size:1.3rem;
    
    `}


`