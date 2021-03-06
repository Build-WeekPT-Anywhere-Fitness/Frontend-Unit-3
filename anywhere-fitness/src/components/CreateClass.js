import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom"
import {updateClass} from "../actions/classActions"
import {allClassesUser} from "../actions/userActions"

const initialState = () =>({
    intensity:"",
    duration:"",
    location:"",
    date:"",
    time:"",
})

const CreateClass = (props) =>{
    const [createClass, setCreateClass]=useState(initialState)
   


    const editClass = () =>{
        axiosWithAuth()
        .get('auth/instructor/classes')
        .then((res) =>{
            console.log("Editclass: axios call good",res)
            props.setCreateClass(res.data)
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
        console.log(e)
        axiosWithAuth()
        .put(`auth/instructor/classes${createClass.id}`,createClass)
        .then((res) =>{
            console.log("handleSubmit:axios success ")
            editClass();
        })
        .catch((err) =>{
            console.error("error unable to update class ${id} ",err)
        })
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setCreateClass({
            ...createClass,
            [e.target.name]: e.target.value
        })
    }


    return(
        <div className="create-class-form">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="intensity"
                value={createClass.intensity}
                placeholder="Intensity"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="duration"
                value={createClass.duration}
                placeholder="Duration"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="location"
                value={createClass.location}
                placeholder="Location"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="date"
                value={createClass.date}
                placeholder="Date"
                onChange={handleChange}
                />
                <input 
                type="text"
                name="time"
                value={createClass.time}
                placeholder="Time"
                onChange={handleChange}
                />
            </form>
            <button className="update-button" onClick={handleSubmit} >
        Save Edit
      </button>
        </div>
    )
}

export default CreateClass