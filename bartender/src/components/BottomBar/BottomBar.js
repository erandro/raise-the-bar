import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./BottomBar.css";

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 10,
            intervalID: "",
            hint: " seconds"
        };


    }

    clickListener = () => {
        this.props.onClick("Look within your heart of hearts and you will find the way to greatness.");
        this.startTimer();
    }

    countDown = () => {
        if (this.state.time > 1) {

            this.setState({
                time: this.state.time - 1
            });
        }
        else if (this.state.hint === " seconds") {
            clearInterval(this.state.intervalID);
            this.setState({ time: "", hint: <Button id="hintButton" onClick={this.clickListener}>CLICK FOR HINT</Button> })
        }
        else {
            this.reset();
        }

    }

    reset = () => {
        this.setState({ hint: " seconds", time: 60 });
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
                <h3>{this.state.time}{this.state.hint}</h3>
            </div>
        );
    }
}

export default BottomBar;