import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import yes_drink from "./yes_drink.gif";
import no_drink from "./no_drink.gif";
import more_drink from "./more_drink.gif";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col id="homeTitleBox">
                    <h1 id="homeTitle">[Raise_The_Bar]</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="3">
                    <div className="theLinkBox lbl">
                        <a className="theLink lbl" href="/game">[ <i id="whiteGlass" class="fas fa-glass-martini-alt"></i> ]</a>
                    </div>
                </Col>
                <Col xs="6" id="homeMiddleText">Click the Martini to PLAY or Trophy to see Leaderboard</Col >
                <Col xs="3">
                    <div className="theLinkBox lbr">
                        <a className="theLink lbr" href="/highscores">[ <i id="whiteTrophy" class="fas fa-trophy"></i> ]</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="homeExplainTextBox">
                        <p className="homeExplainText">Mix 2 items from each side and create new ones:</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="gifItem" src={yes_drink} alt="gif" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="homeExplainTextBox">
                        <p className="homeExplainText">Not all items can be mixed:</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="gifItem" src={no_drink} alt="gif" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="homeExplainTextBox">
                        <p className="homeExplainText">Reveal more basic items when reaching checkpoints:</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="gifItem" src={more_drink} alt="gif" />
                </Col>
            </Row>
        </Container>
    )
}


export default Home;