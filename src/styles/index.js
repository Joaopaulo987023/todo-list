import styled, { createGlobalStyle } from "styled-components";
import img from "../img/background.png"
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
    }

`

export const Container = styled.div`
    width: 500px;
    margin:100px auto 0 auto;
    background: #d1d1d1;
    align-items: center;
    
    border-radius: 10px;
    padding: 20px;
    
`

export const Formulario = styled.form`
    input{
        border: none;
        border-radius: 5px;
        width: 300px;
        height: 40px;
        padding-left:10px;
       
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

    
`

export const Lista = styled.ul`
    width: 100%;
    list-style: none;
    margin-top: 30px;
`  
export const ItemLista = styled.li`
    background-color: ${(props)=>(props.checked ? "#8fac55":"#f2f2f2")};
    border-radius: 5px;
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

`