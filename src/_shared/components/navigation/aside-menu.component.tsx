import * as React from 'react';
import Sider from 'antd/lib/layout/Sider';
import { Layout, Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

interface AsideMenuState {
  collapsed: boolean;
}

export class AsideMenu extends React.Component<{}, AsideMenuState> {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed: boolean) => {
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
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="form" />
              <span>Time Entry</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bar-chart" />
              <span>Analytics</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>Profile</span>
                </span>
              }
            >
              <Menu.Item key="6">
                <Icon type="setting" />
                <span>Settings</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="logout" />
                <span>Logout</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>{this.props.children}</Layout>
      </Layout>
    );
  }
}
