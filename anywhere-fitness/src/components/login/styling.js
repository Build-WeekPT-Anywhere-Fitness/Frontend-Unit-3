import styled from 'styled-components';
import gradient from '../../images/gradienttwo.jpg'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    font-family: system-ui;
    
    .hero-banner { 
        width: 80%;
        height: 100vh;
        position: relative;
        background-image: url(${gradient});
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
        font-size: 26px; 

        @media (max-width: 1385px) {
            font-size: 22px;
        }
    }
    
    .content, img {
        border-radius: 100px;
    }

    .content, h1 {
        font-size: 50px;
        margin-top: 5%;
    }
     h3 {
        font-size: 22px;
        font-weight: none;
        color: #363838;
        margin-top: 5%;
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
`

const Label = styled.label`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 8%;
    font-size: 30px;
`;

const Input = styled.input`
    padding-top: 1vw;
    padding-bottom: 3%;
    padding-right: 50%;
    padding-left: 1%;
    text-align: left;
    border-radius: 10px;
    border: 1px solid #EEEEEE;
    background-color: #EEEEEE;
    border: 2px solid #EEEEEE;
`;

const Form = styled.form`
    width: 50%;
    text-align: center;
    padding-top: 6%;

    img {
        border-radius: 100px;
        position: relative;
        width: 160px;
        
        @media (max-width: 1385px) {
           width: 145px;
        }
    }

    .instuctorToggle {
        color: grey;
        font-weight: bold;
        font-size: 22px;
    }

    button {
        padding-right: 7%;
        padding-left: 7%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 20px;
        text-align: center;
        border: 2px solid #52cde0;
        border-radius: 20px;
        color: white;
        background-color: #52cde0;
        cursor: pointer;
        margin-right: 2%;
    }

    .icons {
        margin-top: 2%;
        font-size: 30px;
    }
`;

export {Label, Input, Form, Container}