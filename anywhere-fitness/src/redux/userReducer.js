// import{
// USER_REGISTER_START,
// USER_REGISTER_SUCCESS,
// USER_REGISTER_FAIL,
// INSTRUCTOR_LOGIN_START,
// INSTRUCTOR_LOGIN_SUCCESS,
// INSTRUCTOR_LOGIN_FAIL,
// LOGOUT_SUCCESS,
// USER_LOGIN_START,
// USER_LOGIN_SUCCESS,
// USER_LOGIN_FAILURE,

// } from "../actions/userActions"

// const initialState = {
//     token: '',
//     user: '',
//     isInstructor: false,
//     isAuth: false,
//     isLoading: false,
//     error: null
// }
// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CREATE_USER:
//             return {
//                 ...state,
//                 user: action.payload,
//                 isLoading: false,
//                 isAuth: true
//             }
//         case USER_FAIL:
//             return { ...state, error: action.payload.message, isLoading: false }
//         case LOGIN_USER:
//             return { ...state, user: action.payload, isLoading: false }
//         case LOGOUT_USER:
//             return { initialState }
//         case LOAD_USER:
//             return { ...state, isLoading: true }
//         default:
//             return state
//     }
// }

// export default userReducer
