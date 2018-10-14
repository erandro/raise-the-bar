import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from 'reactstrap';
import "./FormModal.css";

class FormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            form: ""
        };

        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(){
        if(!this.props.form){
            this.setState({form:  <Form>
                <FormGroup>
                  <Label for="nameInput">Name</Label>
                  <Input type="text" name="nameInput" id="name" />
                </FormGroup></Form>})
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.dataModal} toggle={this.props.toggle} className={this.props.className}>
                    {/* <ModalHeader toggle={this.props.toggle}>It's your boss!</ModalHeader> */}
                    <ModalBody>
                        <h1>You scored {this.props.points} points!</h1>
                        <Form>
                            <FormGroup>
                                <Label for="nameInput">Name</Label>
                                <Input type="text" name="nameInput" id="name" />
                            </FormGroup>
                        </Form>
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

export default FormModal;