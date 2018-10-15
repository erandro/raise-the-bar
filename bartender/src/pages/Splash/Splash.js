import React, { Component } from "react";
import "./Splash.css";
import axios from "axios";
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class Splash extends Component {
    state = {
        scores: []
    }

    componentDidMount() {
        this.setDB();
    }

    setDB = () => {
        axios.get("/api/bar/score/")
            .then(res => {
                console.log(res.data);
                this.setState({ scores: res.data.map(element => <div>{element.name}: {element.points} points</div>) })
            }
            )
            .catch(err => console.log(err));;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col id="highScoreTitleBox">
                        <h1 id="highScoreTitle">[High_Score]</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="gameLinkBox">
                            <a id="gameLink" href="/">BACK_TO_GAME</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="8">
                        <div id="highScoreNamesBox">
                            <h1 className="highScoreNames">{this.state.scores}</h1>
                        </div>
                    </Col>
                    <Col xs="2"></Col>
                </Row>
            </Container>
        )
    }
}

export default Splash;