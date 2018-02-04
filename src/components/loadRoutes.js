import React from 'react';
import { Button } from 'antd';

class LoadRoutes extends React.Component {
  constructor(props) {
    super(props)
    console.warn(props)
  }
  loadRoutes = () => {

  }
  render() {
    // console.warn(this.props)
    return (
      <Button type="primary" onClick={this.props.loadRoutes}>Load Routes</Button>
    )
  }
}

export default LoadRoutes;
