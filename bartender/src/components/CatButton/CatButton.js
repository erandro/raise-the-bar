import React from "react";
import "./Categories.css";

const CatButton = (props) => {
    return (
        <div {...props} className="category-button" data-id="you">{props.id}</div>
    )
}


export default CatButton;