import styled from 'styled-components'
import banner from '../../images/gradient.jpg'

export const Container = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    font-family: system-ui;
    
    .hero-banner { 
        width: 80%;
        height: 100vh;
        position: relative;
        background-image: url(${banner});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .content {
        text-align: center;
        color: white;
        letter-spacing: 5px;
    }
 
    .content, p {
        font-size: 24px; 
        
        @media (max-width: 1385px) {
            font-size: 20px;
        }
    }
    
    .content, img {
        border-radius: 100px;
    }

    .content, h1 {
        font-size: 50px;
        margin-top: 8%;
    }

    button {
        padding-right: 8%;
        padding-left: 8%;
        padding-top: 1%;
        padding-bottom: 1%;
        margin-bottom: 3%;
        font-size: 23px;
        font-weight: bold;
        background-color: transparent;
        color: white;
        border: 2px solid #18DCBF;
        border-radius: 20px;
    }
    h3 {
        font-size: 22px;
        font-weight: none;
        color: #363838;
        margin-top: 5%;
    }
`;

export const Form = styled.form `
    width: 50%;
    text-align: center;
    height: 100vh;

    .role {
        color: #696969;
        font-weight: bold;
    }

    button {
        padding-right: 5%;
        padding-left: 5%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 20px;
        border: 2px solid #64dfdf;
        border-radius: 20px;
        color: white;
        background-color: #64dfdf;
        cursor: pointer;
    }

    .icons {
        margin-top: 6%;
        color: #000000;
        font-size: 30px;
    }

   
`;

export const Label = styled.label `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: 5%;
    font-size: 30px;

    @media (max-width: 1385px) {
        margin: 5%;
    }
`;

export const Input = styled.input `
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-right: 22vw;
    text-align: left;
    border-radius: 6px;
    border: 1px solid #EEEEEE;
    background-color: #EEEEEE;
    border: 2px solid #EEEEEE;
`;