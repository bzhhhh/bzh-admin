import React from 'react'
import { Avatar, Menu, Dropdown } from 'antd'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.baidu.com/">百度</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.google.com/">Google</a>
    </Menu.Item>
  </Menu>
)
class Top extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div>
        <h2 className="logoTitle">猫崽无限公司</h2>
        <div className="topRight">
          <Dropdown overlay={menu} trigger={['click']}>
            <Avatar size={46} src={require('../../../assets/images/logo.png')} />
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Top
