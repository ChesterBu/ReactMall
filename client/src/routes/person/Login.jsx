import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Modal } from "antd";
import md5 from 'blueimp-md5'
import { login } from '../../api/person'
import action from '../../store/action';

function loginFail() {
  const modal = Modal.error({
    title: "登录失败",
    content: "请稍后重新尝试!"
  });
  setTimeout(() => modal.destroy(), 2000);
}


class Login extends Component {
  handleSubmit = ev => { 
    ev.preventDefault()
    // values{password: "2",userName: "1"}
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
        let { userName,password} = values
        password = md5(password)
        let result = await login({
          name: userName,
          password,
        })
        
        //success
        if (parseFloat(result.code) === 0) { 
          this.props.history.go(-1)
          return;
        }
        loginFail();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="personLoginBox">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("userName", {})(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {})(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
              Or <Link to="/person/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
    
export default Form.create()(connect(null, { ...action.course, ...action.person })(Login))