import {axiosWithAuth} from '../utils/axiosWithAuth'
// import cookie from "react-cookie"

///REGISTER USER
export const USER_REGISTER_START="USER_REGISTER_START"
export const USER_REGISTER_SUCCESS="USER_REGISTER_SUCCESS"
export const USER_REGISTER_FAIL="USER_REGISTER_FAIL"
export const registerUser = user => dispatch =>{
    dispatch({type:USER_REGISTER_START})
    return axiosWithAuth()
    .post(`/register`,user)
    .then(res =>{
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:res.data
        })
        return true;
    })
    .catch(err =>{
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:err.response
        })
    })
}
///user login
export const INSTRUCTOR_LOGIN_START="INSTRUCTOR_LOGIN_START"
export const INSTRUCTOR_LOGIN_SUCCESS="INSTRUCTOR_LOGIN_SUCCESS"
export const INSTRUCTOR_LOGIN_FAIL="INSTRUCTOR_LOGIN_FAIL"
export const instructorLogin = credentials => dispatch =>{
    dispatch({INSTRUCTOR_LOGIN_START});
    return axiosWithAuth()
    .post(`/login`,credentials)
    .then(res => {
        localStorage.setItem("token", res.data.token);
        // cookie.save("instructor",res.data.instructor)
        dispatch({type:INSTRUCTOR_LOGIN_SUCCESS, payload:res.data.user})
        return true;
    })
    .catch(err =>{
        dispatch({type:INSTRUCTOR_LOGIN_FAIL, payload:err.response.data})
    })
}
export const instructorIsLoggedIn = instructor => dispatch => {
    dispatch({ type: INSTRUCTOR_LOGIN_SUCCESS, payload: instructor });
  };
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
  localStorage.removeItem("token");
//   cookie.remove("instructorId");
};

export const ALLCLASSES_BYINSTRUCTOR_START ="ALLCLASSES_BYINSTRUCTOR_START";
export const ALLCLASSES_BYINSTRUCTOR_SUCCESS ="ALLCLASSES_BYINSTRUCTOR_SUCCESS";
export const ALLCLASSES_BYINSTRUCTOR_FAILURE ="ALLCLASSES_BYINSTRUCTOR_FAILURE";
export const AllClassesByInstructor = instructorId => dispatch => {
  dispatch({ type: ALLCLASSES_BYINSTRUCTOR_START });
  axiosWithAuth()
    .get(`users/classes/instructor`,instructorId)
    .then(res => {
      dispatch({
        type: ALLCLASSES_BYINSTRUCTOR_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ALLCLASSES_BYINSTRUCTOR_FAILURE,
        payload: err.response.data
      });
    });
};

export const CREATE_CLASS_START = "CREATE_CLASS_START";
export const CREATE_CLASS_SUCCESS = "CREATE_CLASS_SUCCESS";
export const CREATE_CLASS_FAILURE = "CREATE_CLASS_FAILURE";
export const createClass = singleClass => dispatch => {
  dispatch({ type: CREATE_CLASS_START });
  return axiosWithAuth()
    .post(`instructor/classes`,singleClass)
    .then(res => {
      dispatch({
        type: CREATE_CLASS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: CREATE_CLASS_FAILURE,
        payload: err.response.data.message
      });
    });
};

export const CLASS_BYID_START = "CLASS_BYID_START";
export const CLASS_BYID_SUCCESS = "CLASS_BYID_SUCCESS";
export const CLASS_BYID_FAILURE = "CLASS_BYID_FAILURE";
export const ClassByID = classId => dispatch => {
  dispatch({ type: CLASS_BYID_START });
  axiosWithAuth()
    .get(`users/classes/${classId}`)
    .then(res => {
      dispatch({
        type: CLASS_BYID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: CLASS_BYID_FAILURE,
        payload: err.response.data
      });
    });
};

export const UPDATE_INSTRUCTOR_CLASS_START = "UPDATE_INSTRUCTOR_CLASS_START";
export const UPDATE_INSTRUCTOR_CLASS_SUCCESS ="UPDATE_INSTRUCTOR_CLASS_SUCCESS";
export const UPDATE_INSTRUCTOR_CLASS_FAILURE ="UPDATE_INSTRUCTOR_CLASS_FAILURE";
export const updateClass = (classId, singleClass) => dispatch => {
  dispatch({ type: UPDATE_INSTRUCTOR_CLASS_START });
  axiosWithAuth()
    .put(`instructor/classes/${classId}`,singleClass)
    .then(res => {
      dispatch({
        type: UPDATE_INSTRUCTOR_CLASS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_INSTRUCTOR_CLASS_FAILURE,
        payload: err.response.data.message
      });
    });
};

export const DELETE_INSTRUCTOR_CLASS_START = "DELETE_INSTRUCTOR_CLASS_START";
export const DELETE_INSTRUCTOR_CLASS_SUCCESS = "DELETE_INSTRUCTOR_CLASS_SUCESS";
export const DELETE_INSTRUCTOR_CLASS_FAILURE ="DELETE_INSTRUCTOR_CLASS_FAILURE";
export const deleteClass = (classId, singleClass) => dispatch => {
  dispatch({ type: DELETE_INSTRUCTOR_CLASS_START });
  axiosWithAuth()
    .delete(`instructor/classes/${classId}`,singleClass)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

/////////////CLIENT ACTIONS/////////////////////////////CLIENT ACTIONS/////////////////////////////CLIENT ACTIONS///////


export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const userLogin = credentials => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  return axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
    //   cookie.save("user", res.data.user);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data.user
        
      });
      
      return true;
    })
    
    .catch(err => {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: err.response.data
      });
    });
};

export const userIsLoggedIn = user => dispatch => {
  dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
};

export const ALLCLASSES_USER_START = "ALLCLASSES_USER_START";
export const ALLCLASSES_USER_SUCCESS = "ALLCLASSES_USER_SUCCCESS";
export const ALLCLASSES_USER_FAILURE = "ALLCLASSES_USER_FAILURE";
export const allClassesUser = () => dispatch => {
  dispatch({ type: ALLCLASSES_USER_START });
  axiosWithAuth()
    .get(`users/classes`)
    .then(res => {
      dispatch({
        type: ALLCLASSES_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ALLCLASSES_USER_FAILURE,
        payload: err.response
      });
    });
};


