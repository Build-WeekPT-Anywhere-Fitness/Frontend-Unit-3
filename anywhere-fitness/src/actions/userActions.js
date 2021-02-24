import axios from 'axios'
import {
    CREATE_USER,
    FETCH_USER,
    LOGIN_USER,
    LOGOUT_USER,
    LOAD_USER
} from './types'

const API = ''

export const createUser = (user) =>  {
  return dispatch() {

  }
  //CREATE_USER => LOAD_USER => Clear Load =>  LOGIN_USER
}

export const loginUser = (user) => {
  return dispatch() {

  }
  // FETCH_USER => LOAD_USER => CLEAR LOAD =>  LOGIN_USER
}

export const logoutUser = (user) => {
  return dispatch() {

  }
  // LOGOUT_USER => initial State, Cleared Token on CLIENT & SERVER
}