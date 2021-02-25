import React,{useEffect} from "react";
import {fetchClasses} from "../actions/classActions"
import ClassCard from "./ClassCard"

const InstructorDashboard = () =>{

        useEffect(() =>{
            fetchClasses()
        },[])
     
    return(
        <div className="class-card">
            <ClassCard />
          <CreateClass />
        </div>
    )
}
export default InstructorDashboard;