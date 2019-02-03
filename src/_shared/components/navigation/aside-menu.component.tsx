import * as React from 'react';
import Sider from 'antd/lib/layout/Sider';
import { Layout, Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface MenuItem {
  title: string;
  icon: string;
  pathName?: string;
  subMenuItems?: MenuItem[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Log Entry',
    icon: 'form',
    pathName: 'log-entry',
  },
  {
    title: 'Analytics',
    icon: 'bar-chart',
    pathName: 'analytics',
  },
  {
    title: 'Profile',
    icon: 'user',
    subMenuItems: [
      {
        title: 'Settings',
        icon: 'setting',
        pathName: 'settings',
      },
      {
        title: 'Logout',
        icon: 'logout',
      },
    ],
  },
];

interface AsideMenuProps extends RouteComponentProps {}

interface AsideMenuState {
  collapsed: boolean;
}

class AsideMenuComponent extends React.Component<
  AsideMenuProps,
  AsideMenuState
> {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  renderMenuItems = () => {
    const { history } = this.props;
    let keyCounter = 0;
    const menuItems = [];
    for (const menuItemData of MENU_ITEMS) {
      if (menuItemData.subMenuItems && menuItemData.subMenuItems.length) {
        const subMenuItems = [];
        for (const subMenuItemData of menuItemData.subMenuItems) {
          const subMenuItem = (
            <Menu.Item
              key={keyCounter}
              onClick={() =>
                subMenuItemData.pathName &&
                history.push(subMenuItemData.pathName)
              }
            >
              <Icon type={subMenuItemData.icon} />
              <span>{subMenuItemData.title}</span>
            </Menu.Item>
          );
          keyCounter++;
          subMenuItems.push(subMenuItem);
        }
        const subMenuItem = (
          <SubMenu
            key={keyCounter}
            title={
              <span>
                <Icon type={menuItemData.icon} />
                <span>{menuItemData.title}</span>
              </span>
            }
          >
            {subMenuItems}
          </SubMenu>
        );
        keyCounter++;
        menuItems.push(subMenuItem);
      } else {
        const menuItem = (
          <Menu.Item
            key={keyCounter}
            onClick={() =>
              menuItemData.pathName && history.push(menuItemData.pathName)
            }
          >
            <Icon type={menuItemData.icon} />
            <span>{menuItemData.title}</span>
          </Menu.Item>
        );
        keyCounter++;
        menuItems.push(menuItem);
      }
    }
    return menuItems;
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
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            {this.renderMenuItems()}
          </Menu>
        </Sider>
        <Layout>{this.props.children}</Layout>
      </Layout>
    );
  }
}

export const AsideMenu = withRouter(AsideMenuComponent);
