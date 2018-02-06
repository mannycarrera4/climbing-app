import React from 'react';
import Title from './title'
import AddNewRoute from './addNewRoute'
import LoadRoutes from './loadRoutes'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddNewRoute: false
    }
  }

  clickAddNewRoute= () => {
    this.setState({
      showAddNewRoute: true
    })
  }
  // <a className='add-route-link' onClick={this.clickAddNewRoute}>Add Route</a>
  render() {
    return (
      <div>
        <div className='header-container'>
          <Title/>
          <div>
            <AddNewRoute addRoute={this.props.addNewRoute}/>
            <LoadRoutes loadRoutes={this.props.loadRoutes}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
