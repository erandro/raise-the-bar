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
        array: [],
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

    testClickHandler = (item1, item2) => {
        this.checkCombination2(item1, item2)
    }

    checkCombination = (item1, item2) => {
        let name = "";
        for (var category in BarCopy) {
            BarCopy[category].items.forEach(element => {
                if (element.name === item1) {
                    if (element.mixed_items[item2]) name = element.mixed_items[item2];
                }
            });
        }
        if (name) this.makeAvailable(name);
    }

    checkCombination2 = (item1, item2) => {
        let name = "";
        for (var category in BarCopy) {
            BarCopy[category].items.forEach(element => {
                if (element.name === item1) {
                    let list = element.mixed_items;
                    for (var i = 0; i > list.length; i++) {
                        if (list[i].item === item2) {
                            name = list[i].reveal;
                        }
                    }
                }
            });
        }
        if (name) this.makeAvailable(name);
    }

    makeAvailable = name => {
        for (var category in BarCopy) {
            BarCopy[category].items.forEach(element => {
                if (element.name === name) {
                    element.available = true;
                }
            });
        }
        this.setState({ left: "back", right: "back" });
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
        let drinkArray = BarCopy[stateSide] ? BarCopy[stateSide].items.map(item => item.available ? item.name : "none").filter(element => element !== "none") : [];
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
                <div id="update" onClick={() => this.testClickHandler("Gin", "Tonic")}>
                    ADD GIN AND TONIC
               </div>
                <div id="rightBox" className="box">
                    {this.fillBoxes("right")}
                </div>
            </div>
        )
    }
}

export default Display;