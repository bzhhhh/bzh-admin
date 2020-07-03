import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
// import { UserOutlined } from '@ant-design/icons'
import routes from '@/router/index'
const { SubMenu } = Menu
const menus = routes

class Left extends React.Component {
  renderSubMenu = ({ key, icon, title, subs }) => {
    return (
      <SubMenu
        key={key}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }
      >
        {subs &&
          subs.map((item) => {
            return item.subs && item.subs.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenuItem(item)
          })}
      </SubMenu>
    )
  }

  renderMenuItem = ({ key, icon, title }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {menus.map((item) => {
          return item.subs && item.subs.length > 0
            ? this.renderSubMenu(item)
            : this.renderMenuItem(item)
        })}
      </Menu>
    )
  }
}

export default Left
