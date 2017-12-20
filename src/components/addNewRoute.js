import React from 'react';

class AddNewRoute extends React.Component {
  createRoute(event) {
    event.preventDefault()
    const route = {
      name: this.name.value,
      rating: this.rating.value,
      location: this.location.value
    }
    console.log(route)
    this.props.addRoute(route)
    this.routeForm.reset()
  }
  render() {
    console.log(this.props.index)
    return (
      <form ref={(input) => this.routeForm = input} className="fish-edit" onSubmit={(e) => this.createRoute(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Route Name" />
        <input ref={(input) => this.rating = input} type="text" placeholder="Route Rating" />
        <input ref={(input) => this.location = input} type="text" placeholder="Route Location" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddNewRoute;
