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
  render() {
    return (
      <div>
        <div className='header-container'>
          <Title/>
          <div>
            <a onClick={this.clickAddNewRoute}>Add Route</a>
            <LoadRoutes loadRoutes={this.props.loadRoutes}/>
          </div>
        </div>
        { this.state.showAddNewRoute && !this.props.hideNewRoute
            ? <AddNewRoute addRoute={this.props.addNewRoute}/>
            : null
        }
      </div>
    )
  }
}

export default Header;
