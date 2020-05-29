import React from 'react';
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>THIS IS HOME PAGE</h2>
        <span>
          <Link to={'/login'}>去登录</Link>
        </span>
      </div>
    )
  }
}

export default Home
