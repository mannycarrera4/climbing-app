// // import React from 'react';
// //
// // class EditRoute extends React.Component {
// //   constructor(props) {
// //     super(props)
// //     console.warn('props', props)
// //   }
// //   handleChange(event) {
// //     // console.warn(event.target.value)
// //     this.setState({
// //       value: event.target.value
// //     })
// //     // console.warn(this.state.value)
// //   }
// //   handleEditRoute(event) {
// //     event.preventDefault()
// //     const updatedRoute = {
// //       name: this.name.value,
// //       rating: this.rating.value,
// //       location: this.location.value
// //     }
// //     // console.warn(updatedRoute)
// //     // console.warn(this.props.routeToUpdate)
// //     this.props.updatedRoute(this.props.routeKey, updatedRoute)
// //   }
// //   render() {
// //     // console.warn(this.props.routeToUpdate.name)
// //     return (
// //       <form ref={(input) => this.editRouteForm = input} onSubmit={(e) => this.handleEditRoute(e)}>
// //         <input ref={(input) => this.name = input} type="text" defaultValue={this.props.routeToUpdate.name} onChange={this.handleChange.bind(this)} />
// //         <input ref={(input) => this.rating = input} type="text" defaultValue={this.props.routeToUpdate.rating}  />
// //         <input ref={(input) => this.location = input} type="text" defaultValue={this.props.routeToUpdate.location}  />
// //         <button type="submit">Submit Edit</button>
// //       </form>
// //     )
// //   }
// // }
// //
// // export default EditRoute;
//
//
import React from 'react';
import { Modal, Button, Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

class EditRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editRouteForm: true,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    this.createRoute()
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
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
    const { visible, confirmLoading, ModalText } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='add-new-route'>
        <a onClick={this.showModal}>
          <Icon type="edit" />
          Edit Route
        </a>
        <Modal title="Add New Climbing Route"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          cancelText= 'Cancel'
          okText='Submit'
        >
          <div>
            <Form layout="inline">
              <FormItem>
                {getFieldDecorator('routeName', {
                  rules: [{  message: 'Please input your username!' }],
                })(
                  <Input type="text" placeholder="Route Name"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('routeRating', {
                  rules: [{  message: 'Please input your username!' }],
                })(
                  <Input type="text" placeholder="Route Rating"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('routeLocation', {
                  rules: [{  message: 'Please input your username!' }],
                })(
                  <Input type="text" placeholder="Route Location"/>
                )}
              </FormItem>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
const WrappedEditRouteForm = Form.create()(EditRoute);
export default WrappedEditRouteForm;
