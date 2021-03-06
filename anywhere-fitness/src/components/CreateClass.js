import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom"
import {updateClass,createClass} from "../actions/userActions"
import {allClassesUser} from "../actions/userActions"
import ClassCard from "./ClassCard"
const initialState = () =>({
    intensity:"",
    duration:"",
    location:"",
    date:"",
    time:"",
})

const CreateClass = (props) =>{
    const [createFitClass, setCreateFitClass]=useState(initialState)
   


    const editClass = () =>{
        axiosWithAuth()
        .get('auth/instructor/classes')
        .then((res) =>{
            console.log("Editclass: axios call good",res)
            props.setCreateFitClass(res.data)
        })
        .catch((err) =>{
            console.error("edit class: axios call bad",err)
        })
    }

    useEffect(() =>{
        allClassesUser()
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
       createClass();
       setCreateFitClass({
        intensity:"",
        duration:"",
        location:"",
        date:"",
        time:"",
       })
       console.log("class created",createFitClass)
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setCreateFitClass({
            ...createFitClass,
            [e.target.name]: e.target.value
        })
    }


    return(
        <div className="create-class-form">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="intensity"
                value={createFitClass.intensity}
                placeholder="Intensity example:1-5"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="duration"
                value={createFitClass.duration}
                placeholder="Duration"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="location"
                value={createFitClass.location}
                placeholder="Location"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="date"
                value={createFitClass.date}
                placeholder="Date"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="time"
                value={createFitClass.time}
                placeholder="Time"
                onChange={handleChange}
                />
            </form>
            <button className="update-button" onClick={handleSubmit} >
        Create Classs
      </button>
      <ClassCard classes={createFitClass} />
        </div>
    )
}
const mapStateToProps = state => {
    return (
        state
    )
  };
export default connect(
    mapStateToProps,
    { createClass }
  ) (CreateClass)