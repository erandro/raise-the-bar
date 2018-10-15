import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from 'reactstrap';
import "./ModalExample.css";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            img: this.props.img,
            form: this.props.form
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        console.log("PUSSY", this.state);
    }

    // componentDidUpdate(){
    //     this.setState({form : this.props.form})
    // }

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
                        <div class="modalIMG">
                            <img id="friend" src={this.props.img} alt="your friend" />
                        </div>
                        <div class="modalTextbox">
                            <p>Edward says:</p>
                            <p>"{this.props.message}"</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.form ? this.props.altToggle : this.props.toggle}>Okay</Button>{' '}
                        {/* <Button color="secondary" onClick={this.props.altToggle}>Cool</Button> */}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;