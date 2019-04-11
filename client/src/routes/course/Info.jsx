import React, { Component } from 'react'
import { connect } from "react-redux"
import { Button } from "antd"
import Qs from 'qs'
import { queryInfo } from '../../api/course'
class Info extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    let {
        location: { search }
      } = this.props,
      { courseId = 0 } = Qs.parse(search.substr(1)) || {};
    console.log(this.props.location);
    let result = await queryInfo(courseId);
    if (parseFloat(result.code) === 0) {
      this.setState({
        data: result.data
      });
    }
  }

  render() {
    let { data } = this.state;
    if (!data) return "";
    return (
      <div className="baseInfo">
        <video src="" controls preload="none" />
        <div className="content">
          <h3>{data.name}</h3>
          <p>{data.dec}</p>
          <span>课程价格：{data.price}</span>
          <Button>加入购物车</Button>
        </div>
      </div>
    );
  }
}
export default connect()(Info)