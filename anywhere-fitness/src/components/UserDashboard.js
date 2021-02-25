import React,{useEffect} from "react";
import {fetchClasses} from "../actions/classActions"
import ClassCard from "./ClassCard"
const UserDashboard = () =>{

    // const handleLoadClasses = e =>{
    //     e.preventDefault();
    //     props.loadClasses()
    // }
    //     if(error){
    //         return <h2>Error loading data...: {error}</h2>
    //     }
    //     if(isFetching){
    //         return <h2>Fetching classes</h2>
    //     }
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