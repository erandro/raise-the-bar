import React, { Component } from "react";
import "./Display.css";
import Wrapper from "../Wrapper";
import CatButton from "../CatButton";
import BarCopy from "../../BarCopy.json"
import Phases from "../../Phases.json"

class Display extends Component {
    state = {
        categories: { "juices": ["orange juice", "lemonade", "apple juice"], "low proof": ["beer"], "other": ["poison"] },
        left: { status: "categories", drink: "" },
        right: { status: "categories", drink: "" },
        array: [],
        drinkArray: ["Vodka", "Gin", "Tequila", "Rum", "Orange Juice", "Tomato Juice", "Lemon Juice", "Coke", "Tonic", "Ginger Beer"],
        firstDrink: "",
        secondDrink: "",
        drinkCount: 10,
        phase: 1
    };

    componentDidUpdate() {
        // document.getElementById(this.state.firstDrink) ? document.getElementById(this.state.firstDrink).style.backgroundColor = "red" : console.log("uh oh");
        //this.updateColor("green");
        this.updateColor("left", "green");
        this.updateColor("right", "yellow");

        //console.log("LeftDrink: ", this.state.left.drink);

        // if (this.state.drinkCount === 15 && this.state.phase === 1) {
        //     this.unveilNewPhase();
        //     this.setState({ phase: 2 });
        // }
        switch (this.state.drinkCount) {
            case 15:
            case 20:
            case 25:
            case 35:
            case 45:
            case 55:
            case 65:
            case 80:
                this.unveilNewPhase();
                break;

            default:
                break;
        }
    }

    unveilNewPhase = () => {
        //let phase2Items = ["Scotch", "Bourbon", "Sour", "Bitters"];
        let phase2Items = Phases[this.state.phase];
        alert("you did good, here's some more ingredients haha");
        phase2Items.forEach(item => {
            this.makeAvailable(item, true);
        });

        this.setState({ drinkArray: [...this.state.drinkArray, ...phase2Items], drinkCount: this.state.drinkCount + phase2Items.length, phase: this.state.phase + 1 })
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
            //this.updateDrinksArray(newDrink);
            // this.makeAvailable(name).then((newDrink) => this.updateDrinksArray(newDrink));

        }
        else {
            alert(`Not a Drink!`)
        }
        console.log("the checker ran", item1, item2)
        this.clearBoard();
    }

    makeAvailable = (name, isPhaseChange) => {
        for (var category in BarCopy) {
            BarCopy[category].items.forEach(element => {
                if (element.name === name) {
                    element.available = true;
                    this.makeCategoryAvailable(element.category);
                    if (!isPhaseChange) this.updateDrinksArray(element.name);
                    return element.name;
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
        console.log("drink: ", drink)
        if (!this.state.drinkArray.includes(drink)) {
            this.setState({ drinkArray: [...this.state.drinkArray, drink], drinkCount: this.state.drinkCount + 1 })
        }
    }

    clearBoard = () => {
        this.setState({ left: { status: "back", drink: "" }, right: { status: "back", drink: "" }, firstDrink: "", secondDrink: "" });
    }


    firstClickHandler = event => {
        event.preventDefault();

        let parent = event.target.parentElement;

        let type = parent.getAttribute("type") || this.state.firstDrink;
        console.log(parent, type);

        const side = parent.getAttribute("data");

        let oppositeSide = side === "left" ? "right" : "left";

        if (this.state[side].status === "back") {
            this.setState({ [side]: { drink: this.state[side].drink, status: parent.getAttribute("id") } });
        }
        // else if (!this.state.firstDrink && side === "left") {
        //     //parent.style.backgroundColor = "red";
        //     //this.updateColor("firstDrink", "blue");
        //     this.setState({ firstDrink: parent });
        // }
        // else if (!this.state.secondDrink && side === "right") {
        //     //parent.style.backgroundColor = "red";
        //     //this.updateColor("secondDrink", "yellow");
        //     this.setState({ secondDrink: parent });
        // }



        else if (!this.state[side].drink && !this.state[oppositeSide].drink) {
            this.setState({ [side]: { drink: parent, status: this.state[side].status } });
        }
        else if (!this.state[side].drink && this.state[oppositeSide].drink) {
            this.checkCombination(parent.getAttribute("id"), this.state[oppositeSide].drink.getAttribute("id"));
        }
    }

    backButtonHandler = (event) => {
        event.preventDefault();
        const side = event.target.parentElement.getAttribute("data");

        this.setState({ [side]: { status: "back" } });
    }

    fillBoxes = (side) => {

        const stateSide = this.state[side].status;

        // let drinkArray2 = this.state.categories[stateSide] || [];
        let drinkArray = BarCopy[stateSide] ? BarCopy[stateSide].items.map(item => item.available ? item.name : "none").filter(element => element !== "none") : [];
        let myArray = stateSide === "back" ? this.state.array : drinkArray;

        let backButton = stateSide === "back" ? "" : <CatButton onClick={this.backButtonHandler} data={side} id={"back"} type={"categories"} />;

        return (
            <Wrapper>
                {backButton}
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
                    {/* <div id="update" onClick={this.testClickHandler}>
                        COMBINE

                    </div> */}
                    <div id="rightBox" className="box">
                        {this.fillBoxes("right")}
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;