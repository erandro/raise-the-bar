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
                let allScores = res.data;
                function swap(A, i, j) {
                    let temp = A[i];
                    A[i] = A[j];
                    A[j] = temp;
                }
                for (let i = 0; i < allScores.length; i++) {
                    let bestscore = allScores[0].points;
                    for (let j = i + 1; j < allScores.length; j++) {
                        if (allScores[i].points > allScores[j].points) {
                            bestscore = allScores[j];
                            swap(allScores, i, j)
                        }
                    }
                }
                this.setState({ scores: res.data.map(element => <div>{element.name}: {element.points} seconds</div>) })
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
                            <a id="gameLink" href="/">HOME</a>
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