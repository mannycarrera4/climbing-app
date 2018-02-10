import React from 'react';
import { Modal, Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

class AddNewRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addNewRouteForm: true,
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

  createRoute = (e) => {
    const route = {
      name: this.props.form.getFieldValue('routeName'),
      rating: this.props.form.getFieldValue('routeRating'),
      location: this.props.form.getFieldValue('routeLocation')
    }
    // console.warn(route)
    this.props.addRoute(route)
    this.props.form.resetFields()
    this.setState({
      addNewRouteForm: false
    })
  }
  render() {
    const { visible, confirmLoading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='add-new-route'>
        <a onClick={this.showModal}>
          <Icon type="plus" />
          Add New Route
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
            <Form layout="vertical">
              <FormItem label='Route Name'>
                {getFieldDecorator('routeName', {
                  rules: [{  message: 'Please input your username!' }],
                })(
                  <Input type="text" placeholder="Enter a Route Name"/>
                )}
              </FormItem>
              <FormItem label='Route Rating'>
                {getFieldDecorator('routeRating', {
                  rules: [{  message: 'Please input your username!' }],
                })(
                  <Input type="text" placeholder="Enter a Route Rating"/>
                )}
              </FormItem>
              <FormItem label='Route Location'>
                {getFieldDecorator('routeLocation', {
                  rules: [{  message: 'Please input your username!' }],
                })(
                  <Input type="text" placeholder="Enter a Route Location"/>
                )}
              </FormItem>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
const WrappedAddNewRouteForm = Form.create()(AddNewRoute);
export default WrappedAddNewRouteForm;
