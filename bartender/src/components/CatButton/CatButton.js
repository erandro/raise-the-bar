import React from "react";
import "./Categories.css";

const CatButton = (props) => {
    return (
        <div {...props} className="img-box" data-id="you">
            <img src="https://image.ibb.co/deckG9/category01.png"
                alt={props.id} />
            <div className="bottom-center-text">
                {props.id}
            </div>
        </div>
    )
}

export default CatButton;