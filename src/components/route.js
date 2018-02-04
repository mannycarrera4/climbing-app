import React from 'react';
import { Icon, Button } from 'antd'
import './table.css'

class Route extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.routeDetails.name}</td>
        <td>{this.props.routeDetails.rating}</td>
        <td>{this.props.routeDetails.location}</td>
        <td>
          <Button className='button-table ' onClick={() => this.props.editRoute(this.props.index)} type='primary'>
            Edit
            <Icon type="edit" />
          </Button>
          <Button onClick={() => this.props.removeRoute(this.props.index)} type='danger'>Delete</Button>
        </td>
      </tr>
    )
  }
}

export default Route;
