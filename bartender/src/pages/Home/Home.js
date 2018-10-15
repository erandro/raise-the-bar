import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { Container, Row, Col, Jumbotron } from 'reactstrap';


const Home = ()=> {
    return (
        <Container>
                <Row>
                    <Col id="homeTitleBox">
                        <h1 id="homeTitle">[Raise_The_Bar]</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="theLinkBox lbl">
                            <a className="theLink lbl" href="/game">[Play]</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="theLinkBox lbr">
                            <a className="theLink lbr" href="/highscores">[Leaderboards]</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="2"></Col>
                    <Col xs="8">
                        <div id="highScoreNamesBox">
                            <h1 className="highScoreNames"></h1>
                        </div>
                    </Col>
                    <Col xs="2"></Col>
                </Row>
            </Container>
    )
}


export default Home;