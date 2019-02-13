import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import "./FormModal.css";
import API from "../../utils/API"
// import Timer from "../Timer";

class FormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nameInput: "",
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        if (value.length <= 3) {
            this.setState({
                [name]: value.toUpperCase()
            });
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.nameInput) {
            API.saveScore({
                name: this.state.nameInput,
                points: this.props.time
            })
                .then(res =>
                    window.location.pathname = '/highscores'
                )
        }

        this.setState({
            nameInput: ""
        });
    };

    render() {
        return (
            <div>
                <Modal size="md" isOpen={this.props.dataModal} toggle={this.props.toggle} className={this.props.className}>
                    {/* <ModalHeader toggle={this.props.toggle}>It's your boss!</ModalHeader> */}
                    <ModalBody>
                        {/* <h1>You scored {this.props.points} points!</h1> */}
                        <h1>You beat the game in {this.props.time} seconds!</h1>
                        <h5>
                            Enter your initials to save your score!
                        </h5>
                        <Form>
                            <FormGroup>

                                <Input
                                    type="text"
                                    name="nameInput"
                                    id="nameInput"
                                    value={this.state.nameInput}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleFormSubmit}>Submit</Button>{' '}
                        {/* <Button color="secondary" onClick={this.props.toggle}>Quit</Button> */}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default FormModal;