import React, { Component } from 'react'
import { connect } from "react-redux";
import { Form, Button, Input, Modal } from "antd";
import md5 from "blueimp-md5";
import { register } from "../../api/person";
import action from "../../store/action/index";

function loginFail() {
  const modal = Modal.error({
    title: "注册失败",
    content: "请稍后重新尝试!"
  });
  setTimeout(() => modal.destroy(), 2000);
}
class Register extends Component {
  handleSubmit = ev => { 
    ev.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        values.password = md5(values.password);
        let result = await register(values);
        if (parseFloat(result.code) === 0) {
          this.props.queryBaseInfo();
          this.props.history.push("/person");
          return;
        }
        loginFail();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <section className="personLoginBox">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="用户名">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="邮箱">
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "请输入邮箱!" },
                { type: "email", message: "输入的邮箱格式不正确!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="手机">
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "请输入手机号!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="密码">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              立即注册
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}

export default Form.create()(
  connect(
    null,
    action.person
  )(Register)
);
