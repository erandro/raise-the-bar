import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./HintButton.css";

class HintButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 10,
            intervalID: "",
            hint: "s until hint"
        };


    }

    clickListener = () => {
        // this.props.onClick("Look within your heart of hearts and you will find the path to greatness.");
        let innerHint = this.props.hint();
        console.log("inner hint: ", innerHint);
        this.startTimer();
    }

    countDown = () => {
        if (this.state.time > 1) {

            this.setState({
                time: this.state.time - 1
            });
        }
        else if (this.state.hint === "s until hint") {
            clearInterval(this.state.intervalID);
            this.setState({ time: "", hint: <Button id="hintButton" onClick={this.clickListener}>CLICK FOR HINT</Button> })
        }
        else {
            this.reset();
        }

    }

    reset = () => {
        this.setState({ hint: "s until hint", time: 60 });
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        let poop = setInterval(this.countDown, 1000);
        this.setState({ intervalID: poop })
    }

    render() {
        return (
            <div id="bar">
                <h6>{this.state.time}{this.state.hint}</h6>
            </div>
        );
    }
}

export default HintButton;