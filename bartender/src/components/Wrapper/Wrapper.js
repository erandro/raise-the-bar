import React from "react";
import "./Wrapper.css";
//import LoadingHOC from "../../components/HOC/LoadingHOC.js";

const Wrapper = (props) => {
    return (
        <div id="DrinksBox">
            {props.children}
        </div>
    )
}

export default Wrapper;