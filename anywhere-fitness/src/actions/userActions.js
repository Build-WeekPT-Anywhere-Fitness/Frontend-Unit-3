import {axiosWithAuth} from '../utils/axiosWithAuth'
import {
    CREATE_USER,
    USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    LOAD_USER
} from './types'
// NEED API_URL & ENDPOINTS!

//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!
export const createUser = (user) => (dispatch) => {
    dispatch({ type: LOAD_USER })
    axiosWithAuth()
        .post('auth/register', user)
        .then((res) => {
            dispatch({ type: CREATE_USER, payload: res.data })
        })
        .catch((err) => dispatch({ type: USER_FAIL, payload: err }))
}

//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!
export const loginUser = (user) => (dispatch) => {
    dispatch({ type: LOAD_USER })
    axiosWithAuth()
        .post('auth/login	', user)
        .then((res) => {
            dispatch({ type: LOGIN_USER, payload: res.data })
        })
        .catch((err) => dispatch({ type: USER_FAIL, payload: err }))
}

//TODO ADDRESS ENDPOINT AND WHAT TO SEND BACK!
export const logoutUser = (user) => (dispatch) => {
    dispatch({ type: LOAD_USER })
    axiosWithAuth()
        .post('auth/login', { user })
        .then((res) => {
            dispatch({ type: LOGOUT_USER })
        })
        .catch((err) => dispatch({ type: USER_FAIL, payload: err }))
}
