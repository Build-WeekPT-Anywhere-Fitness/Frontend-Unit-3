import React,{useEffect} from "react";
import {loadClasses} from "../actions/index"
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserDashboard = ({api_data,type,duration,intensity,location,date,time,isFetching,error, ...props}) =>{

    const handleLoadClasses = e =>{
        e.preventDefault();
        props.loadClasses()
    }
        if(error){
            return <h2>Error loading data...: {error}</h2>
        }
        if(isFetching){
            return <h2>Fetching classes</h2>
        }
        
        const classRegistration = (e) =>{
            e.preventDefault();
            axiosWithAuth()
            .post("",api_data)
            .then((res) =>{
                console.log(res, "class registration succesful")

            })
            .catch((err) =>console.log(err,"error registering for class"))
        }

    return(
        <div className="class-card">
            <h1>{api_data.type} </h1>
            <h2>{api_data.intensity} </h2>
            <h3>{api_data.duration}  </h3>
            <h3>{api_data.location}  </h3>
            <h3>{api_data.date}  </h3>
            <h3>{api_data.time}  </h3>
            <button onClick={classRegistration}>Register</button>
        </div>
    )
}