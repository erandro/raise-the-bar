import React from "react";
import "./Categories.css";
import CatButton from "../CatButton";

const Categories = (props) => {
    return (
        <div id="Box">
            {/* <button {...props} className="category-button" data-id="me"></button>
            <div {...props} className="category-button" data-id="you">{props.data}</div> */}
            {props.array.map(item => (
                <CatButton {...props} key={item} id={item} />
            ))}
        </div>
    )
}


export default Categories;