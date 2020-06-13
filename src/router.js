/**
 * 路由配置页
 */
import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from '@/utils/asyncComponent'
const Home = AsyncComponent(() => import('@/pages/Home/index.jsx'))
const Login = AsyncComponent(() => import('@/pages/Login/index.jsx'))

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
      <Router>
        <div>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    )
  }
}

export default Routers
