import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

function SavedList({ api_data,type }) {
  return (
    <div className="saved-list">
      <h3>Enrolled class:</h3>
      {api_data.map(classes => {
        return (
          <Link
            to={`/userdashboard/${classes.id}`}
            key={classes.id}
            activeClassName="saved-active"
          >
            <span className="saved-class">{classes.type}</span>
          </Link>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
       
      </div>
      <div className="add-classes-button">
         <Link to="/add-classes">Add classes</Link>
      </div>
    </div>
  );
}
const  mapStateToProps = (state) => {
    return {
        api_data:state.api_data,
        type:state.type,
        
    }
}
export default connect(mapStateToProps) (SavedList);
