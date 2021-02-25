import { CREATE_CLASS } from '../actions/types'
import {
    CREATE_USER,
    USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    LOAD_USER
} from '../actions/userActions'

//isAuth === is authenticated by server
const initialState = {
username: '',
email: '',
password: '',
token: '',
isInstructor: false,
isAuth: false,
isLoading: false
error: null
}

const userReducer = (state = initialState, actions) => {
Switch(actions.type) {
  case CREATE_USER:
    //will set token & !load, !auth
    return state;
  case: USER_FAIL:
  // will set err & clear load
  return state;
  case LOGIN_USER:
    // will !load, !auth,
    return state;
  case LOGOUT_USER:
    // Will revert to initialState
    return state
  case LOAD_USER:
    // Will isLoading: true
    return state
  default:
    return state;
}
}

export default userReducer