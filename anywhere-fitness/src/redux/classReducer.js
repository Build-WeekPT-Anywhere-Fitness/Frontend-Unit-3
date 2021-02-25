import {CREATE_CLASS,CLASS_FAIL, FETCH_CLASS, FETCH_CLASSES, DELETE_CLASS, UPDATE_CLASS} from'../actions/types

initialState = {
classes: [],
error: null,
isLoading: false
}

const classReducer = (state = initialState, actions) => {
  Switch(actions.type) {
    case CREATE_CLASS:
    // Will !loading, return new class arr
      return state;
    case: CLASS_FAIL:
    // Set ERR to state
    return state;
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
