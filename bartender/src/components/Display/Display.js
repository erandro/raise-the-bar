import React, { Component } from "react";
import "./Display.css";
import Wrapper from "../Wrapper";
import CatButton from "../CatButton";
import BarCopy from "../../BarCopy.json"

class Display extends Component {
    state = {
        categories: { "juices": ["orange juice", "lemonade", "apple juice"], "low proof": ["beer"], "other": ["poison"] },
        left: "categories",
        right: "categories",
        array: ["base liquor", "juices", "low proof", "other"],
        array2: [{ "name": "base liquor" }, { "name": "juices" }, { "name": "low proof" }, { "name": "other" }],
        firstDrink: "",
        secondDrink: ""
    };

    componentDidUpdate() {
        // document.getElementById(this.state.firstDrink) ? document.getElementById(this.state.firstDrink).style.backgroundColor = "red" : console.log("uh oh");
        this.updateColor("green")
    }

    updateColor = (color) => {
        let element = this.state.firstDrink;
        element ? element.style.backgroundColor = color : console.log("uh oh");
    }

    componentDidMount() {
        console.log(BarCopy);
        let testCatArray = []
        for (var cat in BarCopy) {
            testCatArray.push(cat);
        }
        console.log(testCatArray);
        this.setState({ left: "back", right: "back", array: testCatArray });
    }

    firstClickHandler = event => {
        event.preventDefault();

        let type = event.target.getAttribute("type") || this.state.firstDrink;
        console.log(event.target, type);

        const side = event.target.getAttribute("data");
        if (this.state[side] === "back") {
            this.setState({ [side]: event.target.getAttribute("id") });
        }
        else {
            //event.target.style.backgroundColor = "red";
            this.updateColor("blue");
            this.setState({ firstDrink: event.target });
        }
    }

    fillBoxes = (side) => {

        const stateSide = this.state[side];

        // let drinkArray2 = this.state.categories[stateSide] || [];
        let drinkArray = BarCopy[stateSide] ? BarCopy[stateSide].items.map(item => item.name) : [];
        let myArray = stateSide === "back" ? this.state.array : drinkArray

        return (
            <Wrapper>
                <CatButton onClick={this.firstClickHandler} data={side} id={"back"} type={"categories"} />
                {myArray.map(item => (
                    <CatButton onClick={this.firstClickHandler} data={side} key={item} id={item} type={item} />
                ))}
            </Wrapper>
        );
    }

    render() {
        return (
            <div id="mainBox">
                <div id="leftBox" className="box">
                    {this.fillBoxes("left")}
                </div>
                <div id="rightBox" className="box">
                    {this.fillBoxes("right")}
                </div>
            </div>
        )
    }
}

export default Display;