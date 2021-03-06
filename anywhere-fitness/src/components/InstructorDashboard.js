import React,{useEffect} from "react";
import {allClassesUser} from "../actions/userActions"
import ClassCard from "./ClassCard"
import CreateClass from "./CreateClass"
const InstructorDashboard = () =>{

        useEffect(() =>{
            allClassesUser()
        },[])
     
    return(
        <div className="class-card">
           
          <CreateClass />
          <ClassCard />
        </div>
    )
}
export default InstructorDashboard;