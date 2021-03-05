import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {connect} from "react-redux";

const ClassCard = props =>{
    const {type,duration,location,date,time,enrolledClass,intensity} = props.fitclass
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
            <h1>{type}</h1>

            <div className="class-intensity">
                Intensity:<h2>{intensity}</h2>
            </div>
            <div className="class-duration">
                Duration:<h2>{duration}</h2>
            </div>
            <div className="class-location">
                Location:<h3>{location}</h3>
            </div>
            <div className="class-date">
                Date:<h3>{date}</h3>
            </div>
            <div className="class-time">
                Time:<h3>{time}</h3>
            </div>
            <button onClick={enrolledClass}>Register</button>
        </div>
        
    );
};

const  mapStateToProps = (state) => {
    return {
        classes:state.classes,
        
}
}
export default connect(mapStateToProps,null)(ClassCard)