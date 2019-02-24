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

/*
import React from "react";
import "./Wrapper.css";
import BackButton from "../BackButton";
import CategoryTitle from "../CategoryTitle";
import CatButton from "../CatButton";
import LoadingHOC from "../../components/HOC/LoadingHOC.js";

const Wrapper = (props) => {
    return (
        <div id="DrinksBox">
            {this.props.theStateSide === "back" ?
            <CategoryTitle
                onClick={this.backButtonHandler}
                data={this.props.side}
                id={"back"}
                name={"categories"}
            /> :
            <BackButton
                onClick={this.backButtonHandler}
                data={this.props.side}
                id={"back"}
                name={this.props.theStateSide}
            />};

                {this.props.myArray.map(
                    (item) => {
                        let itemImg = this.getImgforItem(item)
                        return (
                            <CatButton
                                onClick={this.gameClickHandler}
                                data={this.props.side}
                                key={item}
                                id={item}
                                img={itemImg}
                            />
                        )
                    }
                )}
        </div>
    )
}

export default Wrapper;
*/
