import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
import { Icon } from 'antd'

export default class NavBottom extends Component {
  render() {
    return (
      <footer className="footerNavBox">
        <NavLink to='/course'>
          <Icon type="home" />
          <span>首页</span>
        </NavLink>
        <NavLink to='/mycourse'>
          <Icon type="solution" />
          <span>我的课程</span>
        </NavLink>
        <NavLink to='/person'>
          <Icon type="user" />
          <span>个人中心</span>
        </NavLink>
      </footer>
    );
  }
}
