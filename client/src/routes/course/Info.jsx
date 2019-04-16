import React, { Component } from 'react'
import { connect } from "react-redux"
import { Button } from "antd"
import Qs from 'qs'
import { queryInfo, addShopCart, removeShopCart } from '../../api/course'
import action from '../../store/action'

class Info extends Component {
  state = {
    data: null,
    isShop: -1 //-1没加入购物车,0加入未支付,1已支付
  };
  async componentDidMount() {
    let {
        location: { search }
      } = this.props,
      { courseId = 0 } = Qs.parse(search.substr(1)) || {};
    this.courseId = courseId;
    let result = await queryInfo(courseId);
    if (parseFloat(result.code) === 0) {
      let { pay, unpay } = this.props.shopCart,
        isShop = -1;
      //未购买
      if (unpay.find(item => parseFloat(item.id) === parseFloat(courseId))) {
        isShop = 0;
      }
      //已购买
      if (pay.find(item => parseFloat(item.id) === parseFloat(courseId))) {
        isShop = 1;
      }
      this.setState({
        data: result.data,
        isShop
      });
    }
  }
  handleShopCart = async ev => {
    if (this.state.isShop === -1) {
      //=>还未加入购物车（按钮：加入购物车）
      let result = await addShopCart(this.courseId);
      if (parseFloat(result.code) === 0) {
        //=>DISPATCH派发任务：通知REDUX容器中的购物信息进行更新
        this.props.queryUnpay();
        //=>页面重新展示最新样式
        this.setState({ isShop: 0 });
      }
      return;
    }
    //=>已经加入购物车（按钮：移除购物车）
    let result = await removeShopCart(this.courseId);
    if (parseFloat(result.code) === 0) {
      this.props.queryUnpay(); //=>更新购物车存储的数据
      this.setState({ isShop: -1 });
    }
  };
  render() {
    let { data, isShop } = this.state;
    if (!data) return "";
    return (
      <div className="baseInfo">
        <video src="" controls preload="none" />
        <div className="content">
          <h3>{data.name}</h3>
          <p>{data.dec}</p>
          <span>课程价格：{data.price}</span>
          {isShop !== 1 ? (
            <Button
              type={isShop === -1 ? "dashed" : ""}
              onClick={this.handleShopCart}
            >
              {isShop === -1 ? "加入购物车" : "从购物车移除"}
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default connect(state=>state.course,action.course)(Info)