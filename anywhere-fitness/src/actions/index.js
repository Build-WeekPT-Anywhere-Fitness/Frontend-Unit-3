import axios from "axios";
import React from "react";

export const IS_LOADING ="IS_LOADING";
export const DATA_LOADING_SUCCESS="DATA_LOADING_SUCCESS";
export const DATA_LOADING_FAILURE="DATA_LOADING_FAILURE";

export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILURE="LOGIN_FAILURE";

export const SIGNUP_SUCCESS="SIGNUP_SUCCESS"
export const SIGNUP_FAILURE="SIGNUP_FAILURE";

export const CLASS_REGISTRATION_SUCCESS="CLASS_REGISTRATION_SUCCESS";
export const CLASS_REGISTRATION_FAILURE="CLASS_REGISTRATION_FAILURE";

export const CLASS_CREATION_SUCCESS="CLASS_CREATION_SUCCESS";
export const CLASS_CREATION_FAILURE="CLASS_CREATION_FAILURE";

export const loadClasses = (location) => (dispatch) =>{

    dispatch({type:IS_LOADING});
    console.log(`getting classes`)
    setTimeout(() =>{
        axios
        .get(``)
        .then((res) =>{
            console.log(`KH:actions.js loadClasses axios:good`,res)
            dispatch({type: DATA_LOADING_SUCCESS,
            payload:{type:res.data.type, intensity:res.data.intensity, 
                location:res.data.location, duration:res.data.duration, 
                date:res.data.date, time:res.data.time }})
        })
    })
    .catch(err =>{
        console.log(`KH:actions.js loadClasses axios:bad`,err)
        dispatch({type:DATA_LOADING_FAILURE, payload:`error fetching class data: ${err.message}`})
    },1500)
}

const login = () =>{
    
}