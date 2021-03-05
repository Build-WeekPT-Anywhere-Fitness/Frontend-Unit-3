import {axiosWithAuth} from '../utils/axiosWithAuth'
import { CLASS_FAIL, FETCH_CLASSES, FETCH_CLASS, LOAD_CLASS } from './types'


export const createClass = (lesson) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth
        .post(`auth/users/classes/instructor`,lesson)
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const fetchClasses = () => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth()
        .get(`auth/users/classes`)
        .then((res) => {
            dispatch({ type: FETCH_CLASSES, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const updateClass = (lesson, data,id) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth()
        .put(`auth/instructor/classes/${id}`, data)
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const deleteClass = (lessonID,id) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth()
        .delete(`auth/instructor/classes/${id}`)
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}

