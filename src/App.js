import React, { Component } from 'react';
import sampleRoutes from './sampleRoutes'
import {Row, Col } from 'antd';
import Button from 'antd/lib/button';
import Header from './components/header'
import Route from './components/route'
import EditRoute from './components/editRoute'
import ReactTooltip from 'react-tooltip'
import './App.css';
// import 'antd/dist/antd.css';

class App extends Component {
  constructor() {
    super();
    this.loadSampleRoutes = this.loadSampleRoutes.bind(this)
    this.state = {
      routes: {},
      date: '',
      dataFromChild: null,
      // showRoutes: true
      editingRoute: false
    };
  }

  loadSampleRoutes(event) {
    this.setState({
      routes: sampleRoutes,
      // showRoutes: !this.state.showRoutes
    });
  }

  // componentDidMount() {
  //   fetch('https://www.mountainproject.com/data/get-routes?routeIds=105748391&key=111263172-60b8cb27db624455ea8615f36b9fb11c')
  //     .then(function (data) {
  //       return data.json()
  //       // console.warn(data);
  //     }).then(function (data) {
  //       console.warn(data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

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
    console.warn(newUpdatedRoute)
    this.setState({ newUpdatedRoute })
  }

  addNewRoute(route) {
    let routes = {...this.state.routes};
    const timestamp = Date.now(); // create a unique key for route
    routes[`route-${timestamp}`] = route;
    // console.warn(route)
    this.setState({
      routes,
      hideAddNewRoute: false
    });
  }

  componentDidMount() {
    // setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    clearInterval(this.tick());
  }

  tick() {
    this.setState({
      date: new Date().toString()
    })
  }

  render() {
    // const showEditForm = this.state.edi
    let editForm
    editForm = this.state.editingRoute
      ? <EditRoute editRoute={this.editRoute.bind(this)} updatedRoute={this.updatedRoute.bind(this)} routeKey={this.state.routeKey} routeToUpdate={this.state.dataFromChild}/>
      : null
    return (
      <div className="App">
        <Header loadRoutes={this.loadSampleRoutes.bind(this)} addNewRoute={this.addNewRoute.bind(this)} hideNewRoute={this.state.hideNewRoute} />
        <div>
          <h3>{this.state.date}</h3>
          {editForm}
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
                  <Route
                    key={key}
                    routeDetails={this.state.routes[key]}
                    index={key}
                    editRoute={this.editRoute.bind(this)}
                    removeRoute={this.deleteRoute.bind(this)}>
                  </Route>
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
