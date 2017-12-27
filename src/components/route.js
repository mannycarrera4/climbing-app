import React from 'react';

class Route extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.routeDetails.name}</td>
        <td>{this.props.routeDetails.rating}</td>
        <td>{this.props.routeDetails.location}</td>
        <td>
          <button onClick={() => this.props.editRoute(this.props.index)}>Edit</button>
          <button onClick={() => this.props.removeRoute(this.props.index)}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default Route;
