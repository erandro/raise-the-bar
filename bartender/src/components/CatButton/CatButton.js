import React from "react";
import "./Categories.css";

// class Categories extends Component {

//     render() {
//         return (
//             <div id="Box">
//                 <div className="category-button" onClick={}></div>
//                 <div className="category-button"></div>
//                 <div className="category-button"></div>
//                 <div className="category-button"></div>
//                 <div className="category-button"></div>
//             </div>
//         )
//     }
// }



const CatButton = (props) => {
    return (
        <div {...props} className="category-button" data-id="you">{props.data} #{props.id}</div>
    )
}


export default CatButton;