import React from 'react';
import { Table ,Button  } from 'reactstrap';
import { materialService } from '../util/axios'
import DeleteMaterialModal from './deleteMaterialModal'

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: []
    }
    this.axios = {}
  }
  async componentDidMount() {
    const token = ''
    this.axios = materialService(token)
    const { data } = await this.axios.get('/files/INT102')
    console.log(data)
    this.setState({
      materials: data
    })
  }

  render() {
    const materials = this.state.materials.map((material, index) => {
      return (
        <tr key={material.id}>
          <th scope="row">{index+1}</th>
          <td>{material.fileName}</td>
          <td>{material.createdAt}</td>
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