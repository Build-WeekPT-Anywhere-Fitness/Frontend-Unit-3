import axios from 'axios'
import {
    CREATE_CLASS,
    CLASS_FAIL,
    FETCH_CLASSES,
    FETCH_CLASS,
    UPDATE_CLASS,
    DELETE_CLASS,
    LOAD_CLASS
} from './types'

//TODO ADDRESS API_URL!!

const API_URL = ''

//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!!
export const createClass = (lesson) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .post(`/api/classes/`, lesson)
        .then((res) => {
            dispatch({ type: CREATE_CLASS, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!!

export const fetchClasses = (lessonID) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .get(`/api/classes/`)
        .then((res) => {
            dispatch({ type: FETCH_CLASSES, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!!

export const fetchClassByID = (lessonID) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .get(`/api/classes/${lessonID}`)
        .then((res) => {
            dispatch({ type: FETCH_CLASS, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!!

export const updateClass = (lesson, data) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .put(`/ENDPOINT/${lesson}`, data)
        .then((res) => {
            dispatch({ type: UPDATE_CLASS, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!!
export const deleteClass = (lessonID) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .delete(`${API_URL}/ENDPOINT/${lessonID}`)
        .then((res) => {
            dispatch({ type: DELETE_CLASS, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
