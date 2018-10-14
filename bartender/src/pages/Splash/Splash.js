import React, { Component } from "react";
import "./Splash.css";
import axios from "axios";

class Splash extends Component {
    state = {
        scores: []
    }

    componentDidMount(){
        this.setDB();
    }

    setDB = () => {
        axios.get("/api/bar/score/")
            .then(res => {
                console.log(res.data);
                this.setState({scores: res.data.map(element => <div>{element.name}: {element.points} points</div>)})
            }
            )
            .catch(err => console.log(err));;
    }

    render(){
       return (
            <div>
                <h1>SPLASH</h1>
                <a href="/">MAIN GAME</a>
                <h1>{this.state.scores}</h1>
            </div>
       )
    }
}

export default Splash;