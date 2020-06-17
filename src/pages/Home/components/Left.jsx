import React from 'react'
import { Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

class Left extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="帅的一比">
          <Menu.Item key="1">李哥</Menu.Item>
          <Menu.Item key="2">包包</Menu.Item>
          <Menu.Item key="3">提仔</Menu.Item>
          <Menu.Item key="4">锅仔</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Left
