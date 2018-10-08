import React from "react";
import "./Categories.css";
import CatButton from "../CatButton";

const Drinks = (props) => {
    return (
        <div id="DrinksBox">
            {/* <button {...props} className="category-button" data-id="me"></button>
            <div {...props} className="category-button" data-id="you">{props.data}</div> */}

            <CatButton {...props} id={"categories"} />

        </div>
    )
}


export default Drinks;