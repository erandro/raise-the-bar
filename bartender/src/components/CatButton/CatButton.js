import React from "react";
import "./Categories.css";

const CatButton = (props) => {
    return (
        <div {...props}
            className="img-box" data-id="you">
            <img id={props.id} src={props.img}
                alt={props.id} />
            <div id={props.id} className="bottom-center-text">
                {props.id}
            </div>
        </div>
    )
}

export default CatButton;