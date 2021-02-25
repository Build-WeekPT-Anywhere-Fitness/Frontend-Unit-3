import {CREATE_CLASS,CLASS_FAIL, FETCH_CLASS, FETCH_CLASSES, DELETE_CLASS, UPDATE_CLASS} from'../actions/types

initialState = {
classes: [],
error: null,
isLoading: false
}

const classReducer = (state = initialState, action) => {
  Switch(action.type) {
    case CREATE_CLASS:
    return {...state, isLoading: false, classes: [action.payload]}
    case: CLASS_FAIL:
    return {...state, isLoading:false, error: action.payload.message}
    case DELETE_CLASS:
    // Delete Class by ID, return new Class ar, !isLoading?
      return state;
    case UPDATE_CLASS:
   // Return new Class info by ID , return class arr, !isLoading
      return state
    case LOAD_CLASS:
     // Will {isLoading: true}
      return state
    default:
      return state;
  }
}

export default classReducer
