import React from "react";
import "./Categories.css";
import CatButton from "../CatButton";

const Drinks = (props) => {
    return (
        <div id="DrinksBox">
            {/* <button {...props} className="category-button" data-id="me"></button>
            <div {...props} className="category-button" data-id="you">{props.data}</div> */}

            {/* <CatButton {...props} id={"back"} type="drinks" /> */}
            <CatButton {...props} id={"back"} type={"categories"} />
            {/* <CatButton {...props} id={"orange juice"} /> */}
            {props.array.map(item => (
                <CatButton {...props} key={item} id={item} type={item} />
            ))}

        </div>
    )
}


export default Drinks;