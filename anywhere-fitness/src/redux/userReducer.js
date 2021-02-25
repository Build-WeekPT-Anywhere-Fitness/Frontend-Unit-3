
// import {
//     CREATE_USER,
//     USER_FAIL,
//     LOGIN_USER,
//     LOGOUT_USER,
//     LOAD_USER
// } from '../actions/types'


// const initialState = {
// username: '',
// email: '',
// password: '',
// token: '',
// isInstructor: false,
// isAuth: false,
// isLoading: false,
// error: null
// }

// const userReducer = (state = initialState, action) => {
// switch(action.type) {
//   case CREATE_USER:
//     return {...state, 
      
//       isLoading: false };
//   case USER_FAIL:
//     return {...state, error: action.payload.message, isLoading: false};
//   case LOGIN_USER:
//     return {...state,  isLoading: false };
//   case LOGOUT_USER:
//     return {initialState};
//   case LOAD_USER:
//     return {...state, isLoading:true};
//   default:
//     return state;
// }
// }

// export default userReducer