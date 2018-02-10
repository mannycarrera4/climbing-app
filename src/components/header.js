import React from 'react';
import Title from './title'
import AddNewRoute from './addNewRoute'
import '../css/header.css'

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
            <AddNewRoute addRoute={this.props.addNewRoute}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
