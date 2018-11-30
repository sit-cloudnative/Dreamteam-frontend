import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { materialService } from '../util/axios'

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
    async onDeleteMaterial(id) {
        const token = ''
        this.axios = materialService(token)
        const { data } = await this.axios.delete(`/file/${id}`)
        console.log(data)
        this.toggle()
        window.location.reload()
    }

    render() {
        return (
        <div>
            <Button color="danger" onClick={this.toggle}>
                <i className="fas fa-trash-alt" style={{color:'white'}}></i>
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Delete Material</ModalHeader>
            <ModalBody>
                Do you want to delete {this.props.material.fileName} from {this.props.material.subjectCode}
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {this.onDeleteMaterial(this.props.material.id)}}>DELETE</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default ModalExample;