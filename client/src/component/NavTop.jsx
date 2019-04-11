import React, { Component } from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";
import action from "../store/action";

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

class NavTop extends Component {
  state = {
    in: false
  };
  handleClick = (ev) => { 
    let target = ev.target,
      tarTag = target.tagName;
    if (tarTag === "LI") {
      this.props.queryList({
        page: 1,
        type: target.getAttribute("type"),
        flag: "replace" //=>切换类别是替换REDUX容器中的状态信息
      });
      this.setState({ in: false });
    }
  }
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
                onClick={this.handleClick}
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
export default connect(null,action.course)(NavTop)

