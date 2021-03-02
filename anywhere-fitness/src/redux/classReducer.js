import {LOAD_CLASS,CLASS_FAIL,FETCH_CLASSES, } from'../actions/types

initialState = {
classes: [],
error: null,
isLoading: false
}

const classReducer = (state = initialState, action) => {
  Switch(action.type) {
    case FETCH_CLASSES:
      return {...state, isLoading:false, classes: [action.payload]}
    case: CLASS_FAIL:
      return {...state, isLoading:false, error: action.payload.message}
    case LOAD_CLASS:
      return {...state, isLoading: true}
    default:
      return state;
  }
}
export default classReducer
