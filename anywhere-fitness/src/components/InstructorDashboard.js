import React,{useEffect} from "react";
import {fetchClasses} from "../actions/classActions"
import ClassCard from "./ClassCard"
import CreateClass from "./CreateClass"
const InstructorDashboard = () =>{

        useEffect(() =>{
            fetchClasses()
        },[])
     
    return(
        <div className="class-card">
           
          <CreateClass />
          <ClassCard />
        </div>
    )
}
export default InstructorDashboard;