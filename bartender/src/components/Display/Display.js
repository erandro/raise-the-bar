import React, { Component } from "react";
import "./Display.css";
import Wrapper from "../Wrapper";
import CatButton from "../CatButton";
import HintButton from "../HintButton";
import MusicButton from "../MusicButton";
import BackButton from "../BackButton";
import CategoryTitle from "../CategoryTitle";
//import BarCopy from "../../BarCopy.json"
import Phases from "../../Phases.json";
import Hints from "../../Hints.json";
import axios from "axios";
//import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
import ModalExample from "../ModalExample";
import FormModal from "../FormModal";
import { Container, Row, Col } from 'reactstrap';
let BarCopy = {};



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
        phase: 1,
        modal: false,
        formModal: false,
        message: "",
        finished: false,
        music: "STOPPED",
    };

    componentDidUpdate() {
        this.updateClass("left", "img-box shake-little");
        this.updateClass("right", "img-box shake-little");

        switch (this.state.drinkCount) {
            case 15:
            case 20:
            case 25:
            case 35:
            case 45:
            case 55:
            case 65:

                this.unveilNewPhase();
                break;

            default:
                break;
        }

        if (this.state.drinkCount === 80 && !this.state.finished) {
            this.setState({ finished: true })
            this.toggle("You have proven that you know your stuff. I am hiring you as my new bartender!");
        }

    }

    unveilNewPhase = () => {
        //let phase2Items = ["Scotch", "Bourbon", "Sour", "Bitters"];
        let phase2Items = Phases[this.state.phase];
        //alert("you did good, here's some more ingredients haha");
        this.toggle(`You're doing great! Since you've proved yourself capable, I'll now allow you to use ${Phases[this.state.phase].join(" and ")}!`);
        phase2Items.forEach(item => {
            this.makeAvailable(item, true);
        });

        this.setState({ drinkArray: [...this.state.drinkArray, ...phase2Items], drinkCount: this.state.drinkCount + phase2Items.length, phase: this.state.phase + 1 })
    }

    updateClass = (side, newClass) => {
        let element = this.state[side].drink;
        element ? element.className = newClass : console.log("Run updateClass function");
    }

    componentDidMount() {
        this.toggle("So you'd like to be a bartender? Prove that you know your stuff by mixing some drinks!");

        this.setDB();

        // document.addEventListener('DOMContentLoaded', function () {
        //     let alert = document.getElementById("alert");
        //     var m = new Modal('#yo', {
        //         backdrop: true
        //     });
        //     document.getElementById('btn-open').addEventListener('click', function () {
        //         m.show();
        //     });
        // });

        // console.log(BarCopy);
        // let testCatArray = []
        // for (var cat in BarCopy) {
        //     if (BarCopy[cat].available) testCatArray.push(cat);
        // }
        // console.log(testCatArray);
        // this.setState({ left: { status: "back" }, right: { status: "back" }, array: testCatArray });
    }

    setDB = () => {
        axios.get("/api/bar/")
            .then(res =>
                this.recreateJson(res.data)
            )
            .catch(err => console.log(err));;
    }

    recreateJson = (data) => {
        let protoBar = {}
        data.forEach(element => {
            protoBar[element.name] = element;
        });
        console.log("protobar: ", protoBar);
        BarCopy = protoBar;
        console.log(BarCopy);
        let testCatArray = []
        for (var cat in BarCopy) {
            if (BarCopy[cat].available) testCatArray.push(cat);
        }
        console.log(testCatArray);
        this.setState({ left: { status: "back" }, right: { status: "back" }, array: testCatArray });
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
            this.clearBoard();
        }
        else {
            //alert(`Not a Drink!`)
            this.toggle("that's not a drink");
        }
        console.log("the checker ran", item1, item2)
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

        let drinkArray = BarCopy[stateSide] ? BarCopy[stateSide].items.map(item => item.available ? item.name : "none").filter(element => element !== "none") : [];
        let myArray = stateSide === "back" ? this.state.array : drinkArray;

        let backButton = stateSide === "back" ? <CategoryTitle onClick={this.backButtonHandler} data={side} id={"back"} type={"Categories"} name={"categories"} /> : <BackButton onClick={this.backButtonHandler} data={side} id={"back"} type={"categories"} name={this.state[side].status} />;

        return (
            <Wrapper>
                {backButton}
                {myArray.map(
                    (item) => {
                        let itemImg = this.getImgforItem(item)
                        return (
                            <CatButton onClick={this.firstClickHandler} data={side} key={item} id={item} type={item} img={itemImg} />
                        )
                    }
                )}
            </Wrapper>
        );
    }

    getImgforItem = (name) => {
        if (BarCopy[name]) {
            return BarCopy[name].img
        } else {
            let itemImg = undefined;
            for (var category in BarCopy) {
                BarCopy[category].items.forEach(element => {
                    if (element.name === name) {
                        itemImg = element.img;
                        return;
                    }
                })
                if (itemImg) {
                    return itemImg;
                }
            }
        }
    }



    
    findHint = () => {

        let hintList = Hints[0];

        for (let i = 0; i < hintList.length; i++) {
            if (!this.state.drinkArray.includes(hintList[i])) {
                return this.toggle(`Try making a ${hintList[i]}`);
            }
        }
        console.log("this ideally shouldn't appear");
    }

    changeMusicState = () => {
        if (this.state.music === "STOPPED") {
            this.setState({ music: "PLAYING" });
        } else {
            this.setState({ music: "STOPPED" });
        }
    }

    // drag ****************************************************

    // allowDrop = (ev) => {
    //     ev.preventDefault();
    // }

    // drag = (ev) => {
    //     ev.dataTransfer.setData("text", ev.target.id);
    // }

    // drop = (ev) => {
    //     ev.preventDefault();
    //     var data = ev.dataTransfer.getData("text");
    //     ev.target.appendChild(document.getElementById(data));
    // }

    toggle = (message, form) => {
        console.log("message: ", message)
        let myMessage = typeof message === "string" ? message : this.state.message;
        console.log("my message: ", myMessage);
        this.setState({
            message: this.state.modal ? "" : myMessage,
            modal: !this.state.modal
        });

    }

    formToggle = ()=>{
        if(!this.state.modal){
            this.setState({
                formModal: !this.state.formModal
            });
        }
    }

    render() {
        return (
            <Container id="background">
                <Row>
                    <Col>
                        <div id="titleBox">
                            <h3 id="neonTitle" data-text="[Raise_the_Bar]">[Raise_the_Bar]</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="5">
                        <div id="leftBox" className="box">
                            {this.fillBoxes("left")}
                        </div>
                    </Col>
                    <Col xs="2">
                        <div>
                            <h5 id="ItemCounter" style={{ textAlign: "center" }}>SCORE: {this.state.drinkCount}/80</h5>
                            <MusicButton className="music" changMusicState={this.changeMusicState} playmusic={this.state.music} />
                            <HintButton onClick={this.toggle} hint={this.findHint} />
                            <ModalExample dataModal={this.state.modal} toggle={this.toggle} message={this.state.message} form={this.state.form}/>
                            <FormModal dataModal={this.state.formModal} toggle={this.formToggle} points={this.state.drinkCount}/>
                        </div>
                    </Col>
                    <Col xs="5">
                        <div id="rightBox" className="box">
                            {this.fillBoxes("right")}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <button onClick={()=>this.formToggle("form", true)}>
                        form
                    </button>
                </Row>
            </Container>
        )
    }
}

export default Display;