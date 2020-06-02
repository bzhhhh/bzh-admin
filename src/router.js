/**
 * 路由配置页
 */
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AsyncComponent from '@/utils/asyncComponent'
const Home = AsyncComponent(() => import('@/pages/Dashbord/index'))
const Login = AsyncComponent(() => import('@/pages/Login/index'))

// const routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/login',
//     comments: Login
//   }
// ]

class Routers extends Component {
  render() {
    return (
      <Router >
        <div>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    )
  }
}

export default Routers


