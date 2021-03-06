import React from 'react';
import { Table } from 'reactstrap';
import { materialService } from '../util/axios'
import moment from 'moment'
import ReactLoading from 'react-loading'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: [],
      courseName: '',
      downloading :false
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
        <tr style={{cursor: 'pointer'}} key={material.id} onClick={() => {
          this.onDownload(material.id, material.fileName)          
          }}>
          <th scope="row">{index+1}</th>
          <td>{material.fileName}</td>
          <td>
            {moment(material.createdAt).format('DD-MM-YYYY HH:mm')}
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
          </tr>
        </thead>
        <tbody>
          {materials}
        </tbody>
      </Table>
    );
  }
}