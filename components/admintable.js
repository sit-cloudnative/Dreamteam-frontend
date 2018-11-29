import React from 'react';
import { Table ,Button  } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Materail</th>
            <th>Create At</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>INT final score</td>
            <td>25 Nov 2018 10:30</td>
            <td>
              <Button color="danger">
                <i className="fas fa-trash-alt" style={{color:'white'}}></i>
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>LAB hamberger</td>
            <td>25 Nov 2018 10:45</td>
            <td>
              <Button color="danger">
                <i className="fas fa-trash-alt" style={{color:'white'}}></i>
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>LAB xd tools</td>
            <td>2 Dec 2018 10:05</td>
            <td>
              <Button color="danger">
                <i className="fas fa-trash-alt" style={{color:'white'}}></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}