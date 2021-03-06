import{
   
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    LOGOUT_SUCCESS
    
    } from "../actions/userActions"

   
    
    const initialState = {
        error: "",
        userLoggingIn: false,
        userLoggedIn: false,
        user: ""
    };
    
    export const userLoginReducer = (state = initialState, action) => {
        switch (action.type) {
            case USER_LOGIN_START:
                return {
                    ...state,
                    error: "",
                    USERLoggingIn: true
                }
            case USER_LOGIN_SUCCESS:
                return {
                    ...state,
                    errpr: "",
                    userLoggingIn: false,
                    userLoggedIn: true,
                    user: action.payload
                }
            case USER_LOGIN_FAILURE:
                return {
                    ...state,
                    userLoggingIn: false,
                    userLoggedIn: false,
                    error: action.payload
                }
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    userLoggedIn: false
                }
            default:
                return state;
        }
    }