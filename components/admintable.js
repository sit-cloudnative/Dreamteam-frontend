import React from 'react';
import { Table ,Button  } from 'reactstrap';
import { materialService } from '../util/axios'
import DeleteMaterialModal from './deleteMaterialModal'
import moment from 'moment'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: [],
      courseName: ''
    }
    this.axios = {}
  }
  async componentDidMount() {
    await this.setState({
      courseName: this.props.courseName
    })
    const token = await localStorage.getItem("token")
    this.axios = materialService(token)
    const { data } = await this.axios.get(`/files/${this.props.courseName}`)
    this.setState({
      materials: data
    })
  }
  async onDownload(id, name) {
    const token = localStorage.getItem("token") || ''
    this.axios = materialService(token)
    const { data } = await this.axios.get(`/file/${id}`,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
  }

  render() {
    const materials = this.state.materials.map((material, index) => {
      return (
        <tr key={material.id} style={{cursor: 'pointer'}}>
          <td scope="row" onClick={() => {this.onDownload(material.id, material.fileName)}} >{index+1}</td>
          <td onClick={() => {this.onDownload(material.id, material.fileName)}} >{material.fileName}</td>
          <td onClick={() => {this.onDownload(material.id, material.fileName)}} >{moment(material.createdAt).format('DD-MM-YYYY HH:mm')}</td>
          <td>
            <DeleteMaterialModal material={material}/>
          </td>
        </tr>
      )
    })
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Material</th>
            <th>Create At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {materials}
        </tbody>
      </Table>
    );
  }
}