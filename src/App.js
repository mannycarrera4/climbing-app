import React, { Component } from 'react'
import Header from './components/header'
import WrappedRoute from './components/route'
import base from './base'

import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      routes: {},
      date: '',
      dataFromChild: null,
      editingRoute: false
    }
  }

  componentWillMount() {
    this.ref = base.syncState('routes', {
      context: this,
      state: 'routes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  deleteRoute(routeKey) {
    let routes = {...this.state.routes};
    delete routes[routeKey]
    this.setState({ routes });
  }

  editRoute(routeKey) {
    // console.warn(routeKey)
    let routes = {...this.state.routes};
    const routeData  = routes[routeKey]
    // console.log(routeData)
    // delete routes[routeKey]
    this.setState({
      dataFromChild: routeData,
      editingRoute: true,
      routeKey: routeKey
      // routes: routeData

    });
  }

  updatedRoute(key, updatedRoute) {
    let routes = {...this.state.routes};
    const newRoute = updatedRoute
    const oldRoute = routes[key]
    // console.warn(oldRoute)
    // console.warn(updatedRoute)
    const newUpdatedRoute = Object.assign(oldRoute, newRoute)
    // console.warn(newUpdatedRoute)
    this.setState({ newUpdatedRoute })
  }

  addNewRoute(route) {
    let routes = {...this.state.routes};
    const timestamp = Date.now(); // create a unique key for route
    routes[`route-${timestamp}`] = route;
    this.setState({
      routes
    });
  }

  componentDidMount() {
    // setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  // tick() {
  //   this.setState({
  //     date: new Date().toString()
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Header addNewRoute={this.addNewRoute.bind(this)} hideNewRoute={this.state.hideNewRoute} />
        <div>
          <h3>{this.state.date}</h3>
          <table className="MyClassName">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Object
                .keys(this.state.routes)
                .map(key =>
                  <WrappedRoute
                    key={key}
                    routeDetails={this.state.routes[key]}
                    index={key}
                    editRoute={this.editRoute.bind(this)}
                    removeRoute={this.deleteRoute.bind(this)}
                    updatedRoute={this.updatedRoute.bind(this)}
                    >
                  </WrappedRoute>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
