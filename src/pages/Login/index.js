import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>THIS IS LOGIN PAGE</h2>
        <div><Link to={'/Home'}>Go To Home</Link></div>
      </div>
    )
  }
}

export default Login
