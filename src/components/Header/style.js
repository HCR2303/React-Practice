import styled from 'styled-components';
import Theme from '../../Theme';
import { titles } from '../../Theme/globalStyles';

const LogoVisual= styled.div `

    display: grid;
    grid-template-rows: 130px 30px;
    grid-template-columns: 300px;
    justify-items: center;

    .diastole{
        transition: all 0.6s ease-in;
        width: 150px;        
    }

    .sistole{
        transition: all 0.7s ease-out;
        width: 130px;
    }

    .logoTitle{
        ${titles}
    }

`;

export default LogoVisual;