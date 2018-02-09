import React from 'react';
import { Button } from 'antd';

class LoadRoutes extends React.Component {
  render() {
    return (
      <Button type="primary" onClick={this.props.loadRoutes}>Load Routes</Button>
    )
  }
}

export default LoadRoutes;
