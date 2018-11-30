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
    const token = ''
    this.axios = materialService(token)
    console.log(this.state.courseName)
    const { data } = await this.axios.get(`/files/${this.props.courseName}`)
    console.log(data)
    this.setState({
      materials: data
    })
  }
  async onDownload(id) {
    const token = ''
    const url = 'http://localhost:8080'
    window.open(`${url}/file/${id}`)
  }

  render() {
    const materials = this.state.materials.map((material, index) => {
      return (
        <tr key={material.id} style={{cursor: 'pointer'}}>
          <td scope="row" onClick={() => {this.onDownload(material.id)}} >{index+1}</td>
          <td onClick={() => {this.onDownload(material.id)}} >{material.fileName}</td>
          <td onClick={() => {this.onDownload(material.id)}} >{moment(material.createdAt).format('DD-MM-YYYY HH:mm')}</td>
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