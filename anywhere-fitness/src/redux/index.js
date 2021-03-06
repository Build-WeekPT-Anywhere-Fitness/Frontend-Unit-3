import {combineReducers} from "redux";
import {dashboardReducer} from "./dashboardReducer";
import {instructorLoginReducer} from "./instructorLoginReducer";
import {registerReducer} from "./registerReducer";
import {userLoginReducer} from "./userLoginReducer";

export default combineReducers({
    dashboardReducer,
    instructorLoginReducer,
    registerReducer,
    userLoginReducer,
});