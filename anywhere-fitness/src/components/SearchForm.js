import React, {useState} from "react";
import {connect} from "react-redux";
import {loadClasses} from "../actions/index";

const Searchform = props => {
    const [searchBar, setSearchBar] = useState ();

    const handleChange = e => {
        setSearchBar(e.target.value)
    }
    
    const handleClick = e => {
        console.log("search bar clicked",e)
        e.preventDefault();
        props.loadClasses(setSearchBar)
    }

    return(
        <div className="search-bar">
            <input
            value={searchBar}
            onChange={handleChange}
            placeholder="yoga, pilates, endurance training..."
            name="search"
            type="text"
            />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default connect(() =>{return {}}, {loadClasses})(Searchform)