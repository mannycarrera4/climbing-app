import React from 'react';

class EditRoute extends React.Component {
  constructor(props) {
    super(props)
    console.warn('props', props)
    // this.handleChange = this.handleChange.bind(this);
    // this.state({
    //   value: ''
    // })
    // console.warn(this.props.routeToUpdate)
  }
  handleChange(event) {
    // console.warn(event.target.value)
    this.setState({
      value: event.target.value
    })
    // console.warn(this.state.value)
  }
  handleEditRoute(event) {
    event.preventDefault()
    const updatedRoute = {
      name: this.name.value,
      rating: this.rating.value,
      location: this.location.value
    }
    // console.warn(updatedRoute)
    // console.warn(this.props.routeToUpdate)
    this.props.updatedRoute(this.props.routeKey, updatedRoute)
  }
  render() {
    // console.warn(this.props.routeToUpdate.name)
    return (
      <form ref={(input) => this.editRouteForm = input} onSubmit={(e) => this.handleEditRoute(e)}>
        <input ref={(input) => this.name = input} type="text" defaultValue={this.props.routeToUpdate.name} onChange={this.handleChange.bind(this)} />
        <input ref={(input) => this.rating = input} type="text" defaultValue={this.props.routeToUpdate.rating}  />
        <input ref={(input) => this.location = input} type="text" defaultValue={this.props.routeToUpdate.location}  />
        <button type="submit">Submit Edit</button>
      </form>
    )
  }
}

export default EditRoute;
