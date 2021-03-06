import React,{useEffect,useState} from "react";
import {allClassesUser} from "../actions/userActions"
import {connect} from "react-redux";
import CreateClass from "./CreateClass"
import ClassCard from "./ClassCard"
import { axiosWithAuth } from "../utils/axiosWithAuth";


const UserDashboard = (props) =>{

        useEffect(() =>{
            allClassesUser()
        },[])
     
     
       
    return(
        <div className="class-card">
            <ClassCard />
           {props.classes.map(fitclass =>{
               return(
                   <ClassCard
                   key={fitclass.id}
                   classes={fitclass}
                   />
               )
           })}
          
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        classes:state.dashboardReducer.classes,
        error:state.dashboardReducer.error
    }
}
export default connect(mapStateToProps,{allClassesUser}) (UserDashboard);