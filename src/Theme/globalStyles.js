import { UNSAFE_ErrorResponseImpl } from "react-router";
import styled, {css} from "styled-components";


const titles=css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-image:${props=>`linear-gradient(to right,${props.theme.colors.primary})`};
    background-clip: text;
    color: transparent;
    text-align: center;
`;

const lists=css`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 10px;
    
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;    
        p{
            width: 155px;
        }
        >p:nth-of-type(1){
            font-weight: 400;            
        }
        img{
            width: 80px;
            cursor: pointer;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
                margin: 0;
            }
            >p:nth-of-type(2){
                font-size: 0.7rem;
            }
        }
        .songs{
            cursor: pointer;
            text-decoration: none;            
            font-size: 1rem;
            background-color:${props=>props.theme.colors.azulin};
            color: rgb(0,0,0);
            border-radius: 15px;
            border:none;
            width: 65px;
            &:hover{
                background-color:${props=>props.theme.colors.rosita};
            }
        }
    }  
`;

export {
    titles,
    lists
};