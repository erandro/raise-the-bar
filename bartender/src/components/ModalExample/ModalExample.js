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
                    {/* <ModalHeader toggle={this.props.toggle}>It's your boss!</ModalHeader> */}
                    <ModalBody>
                        <div class="modalIMG">
                            <img id="friend" src="https://pbs.twimg.com/profile_images/999334416538202112/6Y-babvf_400x400.jpg" alt="your friend" />
                        </div>
                        <div class="modalTextbox">
                            <p>Edward says:</p>
                            <p>"{this.props.message}"</p>
                        </div>

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