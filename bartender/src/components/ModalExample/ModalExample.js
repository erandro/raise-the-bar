import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ModalExample.css";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.props.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.props.dataModal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <img id="friend" src="https://pbs.twimg.com/profile_images/999334416538202112/6Y-babvf_400x400.jpg" alt="your friend" />
                        <p>You're doing great! Since you've proved yourself capable, I'll now allow you to use {this.props.newStuff.join(", and ")}!</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Okay</Button>{' '}
                        <Button color="secondary" onClick={this.props.toggle}>Cool</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;