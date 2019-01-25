import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
            <Icon type="arrow-left" />
            <h2 className="title">Title</h2>
        </div>
        <div className="right">
            <Icon type="close" />
        </div>
      </div>
    );
  }
}

export default Header;
