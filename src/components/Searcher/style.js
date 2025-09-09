import styled from "styled-components";
import Theme from "../../Theme/index.js";
import { lists, titles } from "../../Theme/globalStyles.js";

const SeacherContainer = styled.div `
    font-size: 16px;
    height: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 5px;

    .inputSearcher{
        box-sizing: border-box;
        width: 30%; 
        padding: 2px 8px;
        margin: 0;
        border-radius: 500px;
    }
    .buttonSearcher{
        width: 27px;
        height: 26px;
        border-radius: 100%;
        margin: 0;
        padding: 0 ;
        display: flex;          
        border-style: none;
        justify-content:center;
        align-items: center;
        background:${props => `radial-gradient(${props.theme.colors.primary})`};
        &:hover{
            background: ${props => `radial-gradient(${props.theme.colors.secindary})`};
            .iconSearcher{
                fill: rgb(0,0,0);
            }
        }
        cursor: pointer;
        
        .iconSearcher{  
            box-sizing: border-box; 
            width: 20px;
            height: 20px;
            fill: rgb(255,255,255);
            padding-left: 2px;                        
        }
    }
`

const TitleSearcher= styled.h2`
    ${titles};
`

const ListSeacher=styled.ul`
    ${lists};
`

export {
    SeacherContainer,
    TitleSearcher,
    ListSeacher
}