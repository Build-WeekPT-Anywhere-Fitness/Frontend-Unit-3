import{
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
   
    
    } from "../actions/userActions"

    const initialState = {
        user: [],
        creatingUser: false,
        error: ""
    }
    
    export const registerReducer = (state = initialState, action) => {
        switch (action.type) {
            case USER_REGISTER_START:
                return {
                    ...state,
                    error: "",
                    creatingUser: true
                }
            case USER_REGISTER_SUCCESS:
                return {
                    ...state,
                    user: action.payload,
                    creatingUser: false
                }
            case USER_REGISTER_FAIL:
                return {
                    ...state,
                    error: action.payload,
                    creatingUser: false
                }
            default:
                return state;
        }
    }