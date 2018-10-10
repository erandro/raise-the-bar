import React, { Component } from "react";
import "./Display.css";
import Wrapper from "../Wrapper";
import CatButton from "../CatButton";
import BarCopy from "../../BarCopy.json"

class Display extends Component {
    state = {
        categories: { "juices": ["orange juice", "lemonade", "apple juice"], "low proof": ["beer"], "other": ["poison"] },
        left: { status: "categories", drink: "" },
        right: { status: "categories", drink: "" },
        array: [],
        drinkArray: ["Vodka", "Gin", "Tequila", "Rum", "Orange Juice", "Tomato Juice", "Lemon Juice", "Coke", "Tonic", "Ginger Beer"],
        firstDrink: "",
        secondDrink: "",
        drinkCount: 10
    };

    componentDidUpdate() {
        // document.getElementById(this.state.firstDrink) ? document.getElementById(this.state.firstDrink).style.backgroundColor = "red" : console.log("uh oh");
        //this.updateColor("green");
        this.updateColor("left", "green");
        this.updateColor("right", "yellow");


    }

    updateColor = (side, color) => {
        // let element = this.state[thing];
        let element = this.state[side].drink;
        element ? element.style.backgroundColor = color : console.log("uh oh");
    }

    componentDidMount() {
        console.log(BarCopy);
        let testCatArray = []
        for (var cat in BarCopy) {
            if (BarCopy[cat].available) testCatArray.push(cat);
        }
        console.log(testCatArray);
        this.setState({ left: { status: "back" }, right: { status: "back" }, array: testCatArray });
    }

    testClickHandler = () => {
        // if (this.state.firstDrink && this.state.secondDrink) {
        if (this.state.left.drink && this.state.right.drink) {
            this.checkCombination(this.state.left.drink.getAttribute("id"), this.state.right.drink.getAttribute("id"));
        }
        // this.checkCombination(item1, item2)
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
        if (name) {
            alert(`You have created ${name}!`);
            this.makeAvailable(name);
        }
        else {
            alert(`Not a Drink!`)
        }
        console.log("the checker ran", item1, item2)
        this.clearBoard();
    }

    makeAvailable = name => {
        for (var category in BarCopy) {
            BarCopy[category].items.forEach(element => {
                if (element.name === name) {
                    element.available = true;
                    this.makeCategoryAvailable(element.category);
                    this.updateDrinksArray(element);
                }
            });
        }
        //this.setState({ left: { status: "back" }, right: { status: "back" } });
    }

    makeCategoryAvailable = category => {
        BarCopy[category].available = true;
        if (!this.state.array.includes(category)) {
            this.setState({ array: [...this.state.array, category] });
        }
    }

    updateDrinksArray = drink => {
        if (!this.state.drinkArray.includes(drink)) {
            this.setState({ drinkArray: [...this.state.drinkArray, drink], drinkCount: this.state.drinkCount + 1 })
        }
    }

    clearBoard = () => {
        this.setState({ left: { status: "back", drink: "" }, right: { status: "back", drink: "" }, firstDrink: "", secondDrink: "" });
    }


    firstClickHandler = event => {
        event.preventDefault();

        let type = event.target.getAttribute("type") || this.state.firstDrink;
        console.log(event.target, type);

        const side = event.target.getAttribute("data");

        if (this.state[side].status === "back") {
            this.setState({ [side]: { drink: this.state[side].drink, status: event.target.getAttribute("id") } });
        }
        // else if (!this.state.firstDrink && side === "left") {
        //     //event.target.style.backgroundColor = "red";
        //     //this.updateColor("firstDrink", "blue");
        //     this.setState({ firstDrink: event.target });
        // }
        // else if (!this.state.secondDrink && side === "right") {
        //     //event.target.style.backgroundColor = "red";
        //     //this.updateColor("secondDrink", "yellow");
        //     this.setState({ secondDrink: event.target });
        // }

        else if (!this.state[side].drink) {
            this.setState({ [side]: { drink: event.target, status: this.state[side].status } });
        }
    }

    backButtonHandler = (event) => {
        event.preventDefault();
        const side = event.target.getAttribute("data");

        this.setState({ [side]: { status: "back" } });
    }

    fillBoxes = (side) => {

        const stateSide = this.state[side].status;

        // let drinkArray2 = this.state.categories[stateSide] || [];
        let drinkArray = BarCopy[stateSide] ? BarCopy[stateSide].items.map(item => item.available ? item.name : "none").filter(element => element !== "none") : [];
        let myArray = stateSide === "back" ? this.state.array : drinkArray

        return (
            <Wrapper>
                <CatButton onClick={this.backButtonHandler} data={side} id={"back"} type={"categories"} />
                {myArray.map(item => (
                    <CatButton onClick={this.firstClickHandler} data={side} key={item} id={item} type={item} />
                ))}
            </Wrapper>
        );
    }

    render() {
        return (
            <div>
                <h1>COUNT: {this.state.drinkCount}</h1>
                <div id="mainBox">
                    <div id="leftBox" className="box">
                        {this.fillBoxes("left")}
                    </div>
                    <div id="update" onClick={this.testClickHandler}>
                        COMBINE

                    </div>
                    <div id="rightBox" className="box">
                        {this.fillBoxes("right")}
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;