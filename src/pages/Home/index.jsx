import React from 'react'
// import { Link } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import Top from './components/Top'
import Left from './components/Left'
import Main from './components/Main'
import { CheckCircleOutlined } from '@ant-design/icons'
import './index.less'

const { Header, Sider } = Layout

class Dashbord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Header>
          <Top />
          <CheckCircleOutlined />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Left />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Main />
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Dashbord
