import React, { Component } from 'react'
import { ConfigProvider } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

// 全局样式
import '@/assets/styles/App.css'
// 路由
import Routes from '@/router'

function RenderRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class App extends Component {
  render() {
    return (
      <ConfigProvider>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <Switch>
              {Routes.map((route, i) => (
                <RenderRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>

        </Router>
      </ConfigProvider>
    )
  }
}

export default App
