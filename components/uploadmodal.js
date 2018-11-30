import React from 'react';
import { Button, CustomInput, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { materialService } from '../util/axios'

class UploadModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false,
        material: '',
        courseName: 'INT102'
        }
        this.axios = {}

        this.toggle = this.toggle.bind(this);
        this.onSelectedFile = this.onSelectedFile.bind(this)
    }

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }
    onSelectedFile(e) {
        console.log(e.target.files)
        this.setState({
            material: e.target.files[0]
        },() => {
            console.log(this.state.material)
        })
    }
    async onSubmitFile(e) {
        let formData = new FormData()
        formData.append('file', this.state.material)

        this.axios = materialService('')
        const { data } = await this.axios.post(`/file/${this.state.courseName}`, 
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        console.log(data)
        this.toggle()
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
            <Input type="text" name="backdrop" id="backdrop" disabled value={this.state.courseName}></Input>
            <FormGroup style={{marginTop: '5px'}}>
                <Label for="exampleCustomFileBrowser">File Browser</Label>
                <Input type="file" id="exampleCustomFileBrowser" name="customFile"  onChange={(e) => {this.onSelectedFile(e)}} />
            </FormGroup> 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => {this.onSubmitFile(e)}}>UPLOAD</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UploadModal;