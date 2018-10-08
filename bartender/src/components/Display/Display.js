import React, { Component } from "react";
import "./Display.css";
import Categories from "../Categories";
import Drinks from "../Drinks";

class Display extends Component {
    state = {
        categories: "",
        left: "categories",
        right: "",
        array: ["base liquor", "juices", "low proof", "other"]
    };

    componentDidMount() {
        //this.setState({ left: this.state.categories, right: <Categories onClick={this.firstClickHandler} data="squid" id="greenbox" /> });
        console.log(this.firstClickHandler);
        //this.setState({ left: "categories", right: <Categories onClick={this.firstClickHandler} data="squid" id="greenbox" /> });
        //this.setState({ categories: <Categories onClick={this.firstClickHandler} data="squid" array={this.state.array} />, left: "categories", right: <Categories onClick={this.firstClickHandler} data="squid" array={this.state.array} /> });
        this.setState({ categories: <Categories onClick={this.firstClickHandler} data="squid" array={this.state.array} />, left: "categories", right: "categories" });
    }

    firstClickHandler = event => {
        event.preventDefault();
        console.log(event.target);
        const side = event.target.getAttribute("data");
        this.setState({ [side]: event.target.getAttribute("id") });
    }

    fillBoxes = (side) => {
        if (this.state[side] === "categories") {
            //return this.state.categories;
            return <Categories onClick={this.firstClickHandler} data={side} array={this.state.array} />;
        }
        // else return <h1>{this.state[side]}</h1>

        switch (this.state[side]) {
            case "categories":
                return <Categories onClick={this.firstClickHandler} data={side} array={this.state.array} />;

            default:
                return <Drinks onClick={this.firstClickHandler} data={side} array={this.state.array} />

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