import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout
class Main extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    )
  }
}

export default Main
