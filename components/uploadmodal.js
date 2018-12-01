import React from 'react';
import { Button, CustomInput, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { materialService } from '../util/axios'
import Loading from 'react-loading';

class UploadModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            material: '',
            isLoad: false
        }
        this.axios = {}

        this.toggle = this.toggle.bind(this);
        this.onSelectedFile = this.onSelectedFile.bind(this)
    }

    async componentDidMount() {
        await this.setState({
            courseName: this.props.courseName
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    onSelectedFile(e) {
        this.setState({
            material: e.target.files[0]
        })
    }
    async onSubmitFile(e) {
        this.setState({
            isLoad: true
        })
        let formData = new FormData()
        formData.append('file', this.state.material)

        this.axios = materialService('')
        const { data } = await this.axios.post(`/file/${this.props.courseName}`, 
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        this.toggle()
        this.setState({
            isLoad: false
        })
        window.location.reload()
    }
    

    render() {
        return (
        <div>
            <Button color="info" onClick={this.toggle}><i className="fas fa-file-upload"></i> upload</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Upload file</ModalHeader>
                <ModalBody>
                <Label for="backdrop">Course</Label>{' '}
                <Input type="text" name="backdrop" id="backdrop" disabled value={this.props.courseName}></Input>
                <FormGroup style={{marginTop: '5px'}}>
                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                    <Input type="file" id="exampleCustomFileBrowser" name="customFile"  onChange={(e) => {this.onSelectedFile(e)}} />
                </FormGroup> 
            </ModalBody>
            <ModalFooter>
                {
                    (this.state.isLoad)? <Loading type='spokes' color='#0091ac' height='40px' width='40px'/>: ''
                }
                <Button color="primary" onClick={(e) => {this.onSubmitFile(e)}}>UPLOAD</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default UploadModal;