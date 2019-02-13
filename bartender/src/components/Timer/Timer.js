import React from 'react';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Timer.css";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            realSeconds: 0,
            intervalID: ""
        };
    }

    countUp = () => {
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        this.setState({
            seconds: seconds === 59 ? 0 : seconds + 1,
            minutes: seconds === 59 ? minutes + 1 : minutes,
            realSeconds: this.state.realSeconds + 1
        });
    }

    componentDidUpdate() {
        if (this.props.finished) {
            clearInterval(this.state.intervalID);
            this.props.getTime(this.state.realSeconds);
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        let poop = setInterval(this.countUp, 1000);
        this.setState({ intervalID: poop })
    }

    render() {
        return (
            <div id="timerId">
                <h6>
                    {this.state.minutes < 10 ? 0 : ""}{this.state.minutes}
                    :{this.state.seconds < 10 ? 0 : ""}{this.state.seconds}
                </h6>
            </div>
        );
    }
}

export default Timer;