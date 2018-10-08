import React, { Component } from "react";
import "./Display.css";
import Categories from "../Categories";
import Drinks from "../Drinks";

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

    componentDidMount() {
        //this.setState({ left: this.state.categories, right: <Categories onClick={this.firstClickHandler} data="squid" id="greenbox" /> });
        console.log(this.firstClickHandler);
        //this.setState({ left: "categories", right: <Categories onClick={this.firstClickHandler} data="squid" id="greenbox" /> });
        //this.setState({ categories: <Categories onClick={this.firstClickHandler} data="squid" array={this.state.array} />, left: "categories", right: <Categories onClick={this.firstClickHandler} data="squid" array={this.state.array} /> });
        this.setState({ left: "categories", right: "categories" });
    }

    firstClickHandler = event => {
        event.preventDefault();

        let type = event.target.getAttribute("type") || this.state.firstDrink;
        console.log(event.target, type);

        const side = event.target.getAttribute("data");

        this.setState({ [side]: event.target.getAttribute("id"), firstDrink: type });
    }

    fillBoxes = (side) => {
        //if (this.state[side] === "categories") {
        //return this.state.categories;
        //return <Categories onClick={this.firstClickHandler} data={side} array={this.state.array} />;
        //}
        // else return <h1>{this.state[side]}</h1>
        const stateSide = this.state[side];
        switch (stateSide) {
            case "back":
            case "categories":
                return <Categories onClick={this.firstClickHandler} data={side} array={this.state.array2} />;
            case "orange juice":
            default:
                console.log("stateSide: ", stateSide, " side: ", side)
                return <Drinks onClick={this.firstClickHandler} data={side} array={this.state.categories[stateSide]} />

        }
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