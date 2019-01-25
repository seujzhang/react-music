import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

class LeftMenu extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="compass" />
              <span>发现</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>视频</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="bar-chart" />
              <span>榜单</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="smile-o" />
              <span>电台</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="info-circle-o" />
              <span>关于</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default LeftMenu;
