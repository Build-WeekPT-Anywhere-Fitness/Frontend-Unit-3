import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {connect} from "react-redux";



const ClassCard = (props,classes) =>{
    // const {type,duration,location,date,time,enrolledClass,intensity} = props.fitclass
    // const classRegistration = (e) =>{
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post("",classes)
    //     .then((res) =>{
    //         console.log(res, "class registration succesful")

    //     })
    //     .catch((err) =>console.log(err,"error registering for class"))
    // }

    return(
        <div className="class-card">
            <h1>{classes.type}</h1>

            <div className="class-intensity">
                Intensity:<h2>{classes.intensity}</h2>
            </div>
            <div className="class-duration">
                Duration:<h2>{classes.duration}</h2>
            </div>
            <div className="class-location">
                Location:<h3>{classes.location}</h3>
            </div>
            <div className="class-date">
                Date:<h3>{classes.date}</h3>
            </div>
            <div className="class-time">
                Time:<h3>{classes.time}</h3>
            </div>
            <button onClick={classes.enrolledClass}>Register</button>
        </div>
        
    );
};

const  mapStateToProps = (state) => {
    return {
        classes:state.classes,
        
}
}
export default connect(mapStateToProps,null)(ClassCard)