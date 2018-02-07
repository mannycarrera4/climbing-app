import React from 'react';
import { Icon, Button, Modal, Form, Input } from 'antd'
import './table.css'

const FormItem = Form.Item;
class Route extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const { getFieldDecorator } = this.props.form;
    console.warn(this.props.form)
    return (
      <tr>
        <td>{this.props.routeDetails.name}</td>
        <td>{this.props.routeDetails.rating}</td>
        <td>{this.props.routeDetails.location}</td>
        <td>
          <Button className='button-table ' onClick={this.showModal} type='primary'>
            Edit
            <Icon type="edit" />
          </Button>
          <Button onClick={() => this.props.removeRoute(this.props.index)} type='danger'>Delete</Button>
        </td>
        <Modal
          title={`Editing: ${this.props.routeDetails.name}`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText= 'Cancel'
          okText='Submit'
        >
        <Form layout="inline">
          <FormItem>
            {getFieldDecorator('routeName', {
              rules: [{  message: 'Please input your username!' }],
              initialValue: this.props.routeDetails.name
            })(
              <Input type="text" placeholder={this.props.routeDetails.name}/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('routeRating', {
              rules: [{  message: 'Please input your username!' }],
              initialValue: this.props.routeDetails.rating
            })(
              <Input type="text" placeholder={this.props.routeDetails.rating}/>
            )}
          </FormItem>
          <FormItem>
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
