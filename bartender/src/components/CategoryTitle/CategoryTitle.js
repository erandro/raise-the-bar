import React from "react";
import "./CategoryTitle.css";

const CategoryTitle = (props) => {
    return (
        <div {...props} className="back-box">
            <div id={props.id} className="back-text">
                {props.name}
            </div>
        </div>
    )
}

export default CategoryTitle;