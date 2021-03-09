import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import herobanner from '../../images/herobanner.jpg';

const Styles = styled.div `
   

    .container { 
        background-image: url(${herobanner});
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        position: absolute;
        height: 100vh;
    }

   .content {
       text-align: center;
       color: white;
       font-family: system-ui;
       margin-top: 8%;
   }

   .content, h1 {
       font-size: 50px;
       letter-spacing: 5px;
   }

   button {
    padding-right: 6%;
    padding-left: 6%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-bottom: 3%;
    font-size: 23px;
    font-weight: bold;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 20px;
   }
`

function Home() { 
    return ( 
        <Styles>
            <div className="container">
                <div className="content">
                    <h1>Hello, welcome to AnywhereFitness</h1>
                    <p>The all in one app for all of your fitness needs,<br/>
                    making it easy to plan for the future.
                    </p>
                    <Link to='/signup'>
                        <button>Sign up now!</button>
                    </Link>
                </div> 
            </div>
        </Styles>
    )
}      

export default Home;