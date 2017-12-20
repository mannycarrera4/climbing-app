import React, { Component } from 'react';
import sampleRoutes from './sampleRoutes'
import Button from 'antd/lib/button';
import Route from './components/route'
import AddNewRoute from './components/addNewRoute'
import './App.css';
// import 'antd/dist/antd.css';

class App extends Component {
  constructor() {
    super();
    this.loadSampleRoutes = this.loadSampleRoutes.bind(this)
    this.state = {
      routes: {},
      showRoutes: true
    };
  }

  loadSampleRoutes() {
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

  addNewRoute(route) {
    console.warn(route)
    let routes = {...this.state.routes};
    const timestamp = Date.now(); // create a unique key for route
    routes[`route-${timestamp}`] = route;
    console.warn(route)
    this.setState({ routes });
  }

  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.loadSampleRoutes}>Load Routes</Button>
        <div>
          <AddNewRoute addRoute={this.addNewRoute.bind(this)}/>
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
                  <Route key={key} routeDetails={this.state.routes[key]} index={key} removeRoute={this.deleteRoute.bind(this)}></Route>
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
