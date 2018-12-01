import React from 'react';
import { Table } from 'reactstrap';
import { materialService } from '../util/axios'
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
    const token = localStorage? localStorage.getItem("token"): ''
    this.axios = materialService(token)
    const { data } = await this.axios.get(`files/${this.props.courseName}`)
    this.setState({
      materials: data
    })
  }
  onDownload(id) {
    const url = 'http://localhost:8080/'
    window.open(url+`file/${id}`)
  }

  render() {
    const materials = this.state.materials.map((material, index) => {
      return (
        <tr key={material.id} onClick={() => {this.onDownload(material.id)}}>
          <th scope="row">{index+1}</th>
          <td>{material.fileName}</td>
          <td>{moment(material.createdAt).format('DD-MM-YYYY HH:mm')}</td>
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
          </tr>
        </thead>
        <tbody>
          {materials}
        </tbody>
      </Table>
    );
  }
}