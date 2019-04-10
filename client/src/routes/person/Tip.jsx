import React, { Component } from 'react'
import { Alert, Button } from 'antd'
import { withRouter } from "react-router-dom";

class Tip extends Component {
  render() {
    let { history } = this.props 
    return (
      <>
        <Alert
          type="warning"
          message="未登录提醒"
          description="尊敬的用户，您当前尚未登录，请登录后查看个人信息"
        />
        <Button
          type="dashed"
          onClick={ev => {
            history.push("/person/login");
          }}
        >
          立即登录
        </Button>
        <Button
          type="dashed"
          onClick={ev => {
            history.push("/person/register");
          }}
        >
          立即注册
        </Button>
      </>
    );
  }
}

export default withRouter(Tip)