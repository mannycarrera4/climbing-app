import React from 'react';
import firebase from 'firebase'
class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Climbing Routes'
    }
  }
  handleChange = (evt) => {
    const titleRef =  firebase.database().ref('title')
    titleRef.set({
      title: evt.target.value
    })
    evt.preventDefault()
    this.setState({
      title: titleRef.title
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
