import axios from 'axios'
import { CLASS_FAIL, FETCH_CLASSES, FETCH_CLASS, LOAD_CLASS } from './types'

const API_URL = 'https://lambda-fitness.herokuapp.com/api/classes'

export const createClass = (lesson) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .post(API_URL, lesson, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const fetchClasses = () => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .get(`${API_URL}/ENDPOINT/`, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            dispatch({ type: FETCH_CLASSES, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const updateClass = (lesson, data) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .put(`${API_URL}/ENDPOINT/${lessonID}`, data, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const deleteClass = (lessonID) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axios
        .delete(`${API_URL}/ENDPOINT/${lessonID}`, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
