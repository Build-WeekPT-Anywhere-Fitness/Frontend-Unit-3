import axios from 'axios'
import {
    CREATE_CLASS,
    FETCH_CLASSES,
    FETCH_CLASS,
    UPDATE_CLASS,
    DELETE_CLASS,
    LOAD_CLASS
} from './types'

const API = ''


export const createClass = (lesson) => {
return dispatch() {

}
//CREATE CLASS => FETCH CLASSES => LOAD CLASS => CLEAR LOAD
}

export const fetchClasses = (lesson) => {
  return dispatch() {

  }
  // FETCH_CLASSES => LOAD_CLASSES => CLEAR LOAD
}
export const fetchClassByID = (lesson) => {
  return dispatch() {

  }
  //Fetch_CLASS by ID => LOAD_CLASS => CLEAR LOAD
}

export const updateClass = (lesson) => {
  return dispatch() {

  }
  //FetchClassByID => Load => Clear Load => Update Class => Fetch Classes & Classbyid => load => Clear Load
}

export const deleteClass = (lesson) => {
  return dispatch() {

  }
  //DELETE_CLASS => FETCH_CLASSES => LOAD => CLEAR LOAD
}