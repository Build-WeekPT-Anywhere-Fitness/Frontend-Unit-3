import {axiosWithAuth} from '../utils/axiosWithAuth'
import { CLASS_FAIL, FETCH_CLASSES, FETCH_CLASS, LOAD_CLASS } from './types'


export const createClass = (lesson) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth
        .post(``, lesson)
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const fetchClasses = () => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth
        .get(``)
        .then((res) => {
            dispatch({ type: FETCH_CLASSES, payload: res.data })
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const updateClass = (lesson, data) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth
        .put(``, data)
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
export const deleteClass = (lessonID) => (dispatch) => {
    dispatch({ type: LOAD_CLASS })
    axiosWithAuth
        .delete(``)
        .then((res) => {
            fetchClasses()
        })
        .catch((err) => dispatch({ type: CLASS_FAIL, payload: err }))
}
