import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Climbing Routes'
    }
  }
  handleChange = (evt) => {
    evt.preventDefault()
    this.setState({
      title: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <input id='title' type='text' placeholder={this.state.title} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Title;
