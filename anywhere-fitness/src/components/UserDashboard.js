import React,{useEffect,useState} from "react";
import {fetchClasses} from "../actions/classActions"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ClassCard from "./ClassCard"
const UserDashboard = () =>{

    const [fitclasses, setFitClasses]=useState([])
        useEffect(() =>{
            fetchClasses()
        },[])
     
        const fetchClasses = () =>{
            axiosWithAuth()
            .get(`auth/users/classes`)
            .then((res) =>{
                setFitClasses(res.data)
            })
            .catch((err) => console.log(`err,"error getting classes"`))
        }
    return(
        <div className="class-card">
            <ClassCard />
          
        </div>
    )
}
export default UserDashboard;