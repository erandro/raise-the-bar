import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => {
    return (
        <div id="DrinksBox">
            {props.children}
        </div>
    )
}


export default Wrapper;