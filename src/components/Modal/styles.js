import styled from "styled-components";
import { media } from "../../styles/media";

export const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    div{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 100px;
        background-color: #fff;
        border-radius: 8px;
        ${media.mobile`
            padding: 25px;
            font-size: 12px;
        `}
            h2{
                width:200px
            }
         button{
            background-color: red;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
            margin-top: 20px;
            color: #fff;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            &:hover{
                opacity: 0.8;
           }
        }
    }
    
`