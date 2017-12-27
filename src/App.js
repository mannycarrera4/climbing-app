import React, { Component } from 'react';
import sampleRoutes from './sampleRoutes'
import Button from 'antd/lib/button';
import Route from './components/route'
import AddNewRoute from './components/addNewRoute'
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
      editingRoute: true
      // routes: routeData

    });
  }

  updatedRoute(key, updatedRoute) {
    console.warn(updatedRoute)
  }

  addNewRoute(route) {
    // console.warn(route)
    let routes = {...this.state.routes};
    const timestamp = Date.now(); // create a unique key for route
    routes[`route-${timestamp}`] = route;
    // console.warn(route)
    this.setState({ routes });
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
      ? <EditRoute editRoute={this.editRoute.bind(this)} updatedRoute={this.updatedRoute.bind(this)} routeToUpdate={this.state.dataFromChild}/>
      : null
    return (
      <div className="App">
        <Button type="primary" onClick={this.loadSampleRoutes}>Load Routes</Button>
        <div>
          <h3>{this.state.date}</h3>
          <ReactTooltip place="top" type="dark" effect="float"/>
          <AddNewRoute addRoute={this.addNewRoute.bind(this)}/>
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
