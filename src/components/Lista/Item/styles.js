import { media } from "../../../styles/media";
import styled from "styled-components";
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

export const ItemLista = styled.li`
    background-color: ${(props)=>props.checked ? "#8fac55":"#ffff"};
    border-radius: 5px;
    color:#000;
    text-decoration: ${(props)=>props.checked ? "line-through" : ""};
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 20px;
    &:hover img{
        opacity: 1 ;
    }
    ${media.mobile`
        margin-bottom: 20px;
        height: 40px;
        font-size: 12px
    `}



`