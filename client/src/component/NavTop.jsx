import React, { Component } from "react";
import { Icon } from "antd";
import Transition from "react-transition-group/Transition";

const duration = 400,
  defaultStyle = {
    transition: `opacity ${duration}ms`,
    opacity: 0
  },
  transitionStyles = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1
    }
  };

export default class NavTop extends Component {
  state = {
    in: false
  };
  render() {
    return (
      <header className="headerNavBox">
        {/*首页导航*/}
        <div className="homeBox">
          <div className="baseBox">
            <h1 className="logo">bilibili</h1>
            <Icon
              className="icon"
              type="bars"
              style={{
                fontSize: ".6rem"
              }}
              onClick={ev => {
                this.setState({
                  in: !this.state.in
                });
              }}
            />
          </div>
          <Transition in={this.state.in} timeout={1}>
            {state => (
              <ul
                className="filterBox"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                  display: this.state.in ? "block" : "none"
                }}
              >
                <li type="all"> 全部课程 </li>
                <li type="react"> REACT课程 </li>
                <li type="vue"> VUE课程 </li>
                <li type="xiaochengxu"> 小程序课程 </li>
              </ul>
            )}
          </Transition>
        </div>
      </header>
    );
  }
}
