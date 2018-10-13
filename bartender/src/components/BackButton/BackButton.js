import React from "react";
import "./BackButton.css";

const BackButton = (props) => {
    return (
        <div {...props} className="back-box">
            <div id={props.id} className="back-text">
                <i class="fas fa-step-backward"></i> {props.name}
            </div>
        </div>
    )
}

export default BackButton;