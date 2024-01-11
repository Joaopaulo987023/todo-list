import { media } from "../../styles/media";
import styled from "styled-components";

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
            font-size:.9rem;
            height: 2.2rem;
            padding: 0 .5rem;
            opacity: 1;
        `}

        
    }

`