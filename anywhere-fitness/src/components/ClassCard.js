import React from "react";

const ClassCard = ({api_data,type,duration,intensity,location,date,time,isFetching,error, ...props})=>{

    return(
        <div className="class-card">
            <h1>{api_data.type}</h1>

            <div className="class-intensity">
                Intesity:<h2>{api_data.intensity}</h2>
            </div>
            <div className="class-duration">
                Duration:<h2>{api_data.duration}</h2>
            </div>
            <div className="class-location">
                Location:<h3>{api_data.location}</h3>
            </div>
            <div className="class-date">
                Date:<h3>{api_data.date}</h3>
            </div>
            <div className="class-time">
                Time:<h3>{api_data.time}</h3>
            </div>
        </div>
        
    );
};

const  mapStateToProps = (state) => {
    return {
        api_data:state.api_data,
        type:state.type,
        duration:state.duration,
        intensity:state.intensity,
        location:state.location,
        date:state.date,
        time:status.time,
    }
}
export default connect (mapStateToProps())(ClassCard);
