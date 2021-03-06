import{
    
    INSTRUCTOR_LOGIN_START,
    INSTRUCTOR_LOGIN_SUCCESS,
    INSTRUCTOR_LOGIN_FAIL,
    LOGOUT_SUCCESS
    
    } from "../actions/userActions"

    const initialState = {
        error: "",
        loggingIn: false,
        loggedIn: false,
        instructor: ""
    };
    
    export const instructorLoginReducer = (state = initialState, action) => {
        switch (action.type) {
            case INSTRUCTOR_LOGIN_START:
                return {
                    ...state,
                    error: "",
                    loggingIn: true
                };
            case INSTRUCTOR_LOGIN_SUCCESS:
                return {
                    ...state,
                    error: "",
                    loggingIn: false,
                    loggedIn: true,
                    instructor: action.payload
                }
            case INSTRUCTOR_LOGIN_FAIL:
                return {
                    ...state,
                    loggingIn: false,
                    loggedIn: false,
                    error: action.payload
                }
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    loggedIn: false
                }
            default:
                return state;
        }
    };