import React from 'react';
import { Icon, Button, Modal, Form, Input, Popconfirm, message } from 'antd'
import '../css/table.css'

const FormItem = Form.Item;
class Route extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
    this.handleEditRoute()
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  confirmModal = (e) => {
    this.props.removeRoute(this.props.index)
    message.success(`You have successfully deleted  the route ${this.props.routeDetails.name}`);
  }

  cancel = (e) => {
    // message.error('Click on No');
  }

  handleEditRoute() {
    const updatedRoute = {
      name: this.props.form.getFieldValue('routeName'),
      rating: this.props.form.getFieldValue('routeRating'),
      location: this.props.form.getFieldValue('routeLocation'),
    }
    console.warn(updatedRoute)
    this.props.updatedRoute(this.props.index, updatedRoute)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <tr className='table-row'>
        <td>{this.props.routeDetails.name}</td>
        <td>{this.props.routeDetails.rating}</td>
        <td>{this.props.routeDetails.location}</td>
        <td>
          <Button className='button-table ' onClick={this.showModal} type='primary'>
            Edit
            <Icon type="edit" />
          </Button>
          <Popconfirm title="Are you sure delete this route?" onConfirm={this.confirmModal} onCancel={this.cancel} okText="Yes" cancelText="No">
            <a>Delete</a>
          </Popconfirm>
        </td>
        <Modal
          title={`Editing: ${this.props.routeDetails.name}`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText= 'Cancel'
          okText='Submit'
        >
        <Form layout="vertical">
          <FormItem label='Route Name'>
            {getFieldDecorator('routeName', {
              rules: [{  message: 'Please input your username!' }],
              initialValue: this.props.routeDetails.name
            })(
              <Input type="text" placeholder={this.props.routeDetails.name}/>
            )}
          </FormItem>
          <FormItem label='Route Rating'>
            {getFieldDecorator('routeRating', {
              rules: [{  message: 'Please input your username!' }],
              initialValue: this.props.routeDetails.rating
            })(
              <Input type="text" placeholder={this.props.routeDetails.rating}/>
            )}
          </FormItem>
          <FormItem label='Route Location'>
            {getFieldDecorator('routeLocation', {
              rules: [{  message: 'Please input your username!' }],
              initialValue: this.props.routeDetails.location
            })(
              <Input type="text" placeholder={this.props.routeDetails.location}/>
            )}
          </FormItem>
        </Form>
        </Modal>
      </tr>
    )
  }
}

const WrappedRoute = Form.create()(Route);

export default WrappedRoute;
