import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {connect} from "react-redux";



const ClassCard = (props) =>{
  
    return(
        <div className="class-card">
            <h1>{props.type}</h1>

            <div className="class-intensity">
                Intensity:<h2>{props.intensity}</h2>
            </div>
            <div className="class-duration">
                Duration:<h2>{props.duration}</h2>
            </div>
            <div className="class-location">
                Location:<h3>{props.location}</h3>
            </div>
            <div className="class-date">
                Date:<h3>{props.date}</h3>
            </div>
            <div className="class-time">
                Time:<h3>{props.time}</h3>
            </div>
            <button onClick={props.enrolledClass}>Register</button>
        </div>
        
    );
};

const  mapStateToProps = (state) => {
    return {
        classes:state.classes,
        
}
}
export default connect(mapStateToProps,null)(ClassCard)