import{
    ALLCLASSES_BYINSTRUCTOR_START,
    ALLCLASSES_BYINSTRUCTOR_SUCCESS,
    ALLCLASSES_BYINSTRUCTOR_FAILURE,
    CREATE_CLASS_START,
    CREATE_CLASS_SUCCESS,
    CREATE_CLASS_FAILURE,
    UPDATE_INSTRUCTOR_CLASS_START,
    UPDATE_INSTRUCTOR_CLASS_SUCCESS,
    UPDATE_INSTRUCTOR_CLASS_FAILURE,
    DELETE_INSTRUCTOR_CLASS_START,
    DELETE_INSTRUCTOR_CLASS_SUCCESS,
    DELETE_INSTRUCTOR_CLASS_FAILURE,
    CLASS_BYID_START,
    CLASS_BYID_SUCCESS,
    CLASS_BYID_FAILURE
    } from "../actions/userActions"

    const initialState = {
        classes:[],
        singleClass: "",
        creatingClass: false,
        gettingClassesByInstructor: false,
        gettingClassById: false,
        updatingClassById: false,
        deleteingClassById: false,
        error: ""
    }

    export const dashboardReducer = (state = initialState,action) => {
        switch(action.type){
            case ALLCLASSES_BYINSTRUCTOR_START:
                return{
                    ...state,
                    error:"",
                    gettingClassesByInstructor:true
                }
            case ALLCLASSES_BYINSTRUCTOR_SUCCESS:
                return{
                    ...state,
                    classes:action.payload,
                    gettingClassesByInstructor:false
                }
            case ALLCLASSES_BYINSTRUCTOR_FAILURE:
                return{
                    ...state,
                    error:action.payload,
                    gettingClassesByInstructor:false
                }
            case CLASS_BYID_START:
                return{
                    ...state,
                    error:"",
                    gettingClassById:true
                }
            case CLASS_BYID_SUCCESS:
                return{
                    ...state,
                    singleClass:action.payload,
                    gettingClassById:true
                }
            case CLASS_BYID_FAILURE:
                return{
                    ...state,
                    error:action.payload
                }
            case CREATE_CLASS_START:
                return {
                    ...state,
                    creatingClass: true,
                    error: ""
                }
            case CREATE_CLASS_SUCCESS:
                return {
                    ...state,
                    singleClass: action.payload,
                    error: ""
                }
            case CREATE_CLASS_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            case UPDATE_INSTRUCTOR_CLASS_START:
                return {
                    ...state,
                    error: "",
                    updatingClassById: true
                }
            case UPDATE_INSTRUCTOR_CLASS_SUCCESS:
                return {
                    ...state,
                    updatingClassById: false,
                    singleClass: action.payload
                }
            case UPDATE_INSTRUCTOR_CLASS_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            case DELETE_INSTRUCTOR_CLASS_START:
                return {
                    ...state,
                    error: "",
                    deleteingClassById: true
                }
            case DELETE_INSTRUCTOR_CLASS_SUCCESS:
                return {
                    ...state,
                    deleteingClassById: false,
                    singleClass: action.payload
                }
            case DELETE_INSTRUCTOR_CLASS_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state;
        }
    }