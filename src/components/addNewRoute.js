// import React from 'react';
// import { Form, Input, Button } from 'antd';
// const FormItem = Form.Item;
//
// class AddNewRoute extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       addNewRouteForm: true
//     }
//   }
//   createRoute = (e) => {
//     e.preventDefault()
//     const route = {
//       name: this.props.form.getFieldValue('routeName'),
//       rating: this.props.form.getFieldValue('routeRating'),
//       location: this.props.form.getFieldValue('routeLocation')
//     }
//     console.warn(route)
//     this.props.addRoute(route)
//     this.props.form.resetFields()
//     this.setState({
//       addNewRouteForm: false
//     })
//   }
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div>
//         {this.state.addNewRouteForm
//           ? <Form layout="inline" onSubmit={this.createRoute}>
//             <FormItem>
//               {getFieldDecorator('routeName', {
//                 rules: [{  message: 'Please input your username!' }],
//               })(
//                 <Input type="text" placeholder="Route Name"/>
//               )}
//             </FormItem>
//             <FormItem>
//               {getFieldDecorator('routeRating', {
//                 rules: [{  message: 'Please input your username!' }],
//               })(
//                 <Input type="text" placeholder="Route Rating"/>
//               )}
//             </FormItem>
//             <FormItem>
//               {getFieldDecorator('routeLocation', {
//                 rules: [{  message: 'Please input your username!' }],
//               })(
//                 <Input type="text" placeholder="Route Location"/>
//               )}
//             </FormItem>
//             <FormItem>
//               <Button htmlType="submit">+ Add Item</Button>
//             </FormItem>
//           </Form>
//           : null
//         }
//       </div>
//     )
//   }
// }
//
// const WrappedAddNewRouteForm = Form.create()(AddNewRoute);
//
// export default WrappedAddNewRouteForm;
import React from 'react';
import { Modal, Button, Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

class AddNewRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addNewRouteForm: true,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    }
  }
  // state = {
  //   ModalText: 'Content of the modal',
  //   visible: false,
  //   confirmLoading: false,
  // }
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

  createRoute = (e) => {
    const route = {
      name: this.props.form.getFieldValue('routeName'),
      rating: this.props.form.getFieldValue('routeRating'),
      location: this.props.form.getFieldValue('routeLocation')
    }
    console.warn(route)
    this.props.addRoute(route)
    this.props.form.resetFields()
    this.setState({
      addNewRouteForm: false
    })
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
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
const WrappedAddNewRouteForm = Form.create()(AddNewRoute);
export default WrappedAddNewRouteForm;
