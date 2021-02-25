import React,{useEffect} from "react";
import {fetchClasses} from "../actions/classActions"
import ClassCard from "./ClassCard"
const UserDashboard = () =>{

        useEffect(() =>{
            fetchClasses()
        },[])
     
    return(
        <div className="class-card">
            <ClassCard />
          
        </div>
    )
}
export default UserDashboard;