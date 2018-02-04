import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class AddNewRoute extends React.Component {
  constructor(props) {
    super(props)
  }
  createRoute = (e) => {
    e.preventDefault()
    const route = {
      name: this.props.form.getFieldValue('routeName'),
      rating: this.props.form.getFieldValue('routeRating'),
      location: this.props.form.getFieldValue('routeLocation')
    }
    console.warn(route)
    this.props.addRoute(route)
    this.props.form.resetFields()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.createRoute}>
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
        <FormItem>
          <Button htmlType="submit">+ Add Item</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedAddNewRouteForm = Form.create()(AddNewRoute);

export default WrappedAddNewRouteForm;
