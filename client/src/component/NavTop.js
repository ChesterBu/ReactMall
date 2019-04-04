import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
export default class NavTop extends Component {
  constructor(props,context) { 
    super(props, context)
    this.state = {
      
    }
  }
  render() {
    return (
      <header className='headerNavBox'>
        {/*首页导航*/}
        <div className='homeBox'>
          <div className='baseBox'>
            <h1 className='logo'>bilibili</h1>
            <Icon className='icon' type='bars' style={{
              fontSize:'.6rem'
            }}></Icon>

          </div>
          <ul className = 'filterBox'>
            <li> 全部课程 </li>
            <li> react </li>
            <li> vue </li>
            <li> 小程序 </li> 
          </ul>
        </div>
      </header>
    )
  }
}
