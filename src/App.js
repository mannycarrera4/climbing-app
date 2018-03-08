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
    const endpoint = "http://api.wunderground.com/api/27712612aaec568a/geolookup/conditions/q/IA/Cedar_Rapids.json"
    fetch(endpoint)
      .then((response) => {
        console.warn(response.json())
      })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  deleteRoute(routeKey) {
    console.warn(routeKey)
    let routes = {...this.state.routes};
    base.remove('routes')
    delete routes[routeKey]
    this.setState({ routes });
  }

  editRoute(routeKey) {
    let routes = {...this.state.routes};
    const routeData  = routes[routeKey]
    this.setState({
      dataFromChild: routeData,
      editingRoute: true,
      routeKey: routeKey

    });
  }

  updatedRoute(key, updatedRoute) {
    const routes = {...this.state.routes};
    routes[key] = updatedRoute
    this.setState({
      routes
    })
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
