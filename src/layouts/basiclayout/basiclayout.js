import React, { Component } from "react";
import Header from "../../components/header";
import LeftMenu from "../../components/leftmenu";
import './basiclayout.css';

class BasicLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main"> 
            <LeftMenu />
        </div>
      </div>
    );
  }
}

export default BasicLayout;
