import React, { Component } from 'react'
import { connect } from "react-redux"
import { Carousel } from 'antd'
import action from "../../store/action";

class List extends Component {
  componentDidMount() {
    let { queryBanner, bannerData } = this.props;
    if (!bannerData || bannerData.length === 0) {
      queryBanner(); //=>DISPATCH
    }
  }
  render() {
    let { bannerData } = this.props;
    return (
      <div className="listBox">
        {bannerData && bannerData.length !== 0 ? (
          <Carousel autoplay>
            {bannerData.map((item, index) => {
              let { name, pic } = item;
              return (
                <div key={index}>
                  <img src={pic} alt={name} />
                </div>
              );
            })}
          </Carousel>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ ...state.course }),
  action.course
)(List);
