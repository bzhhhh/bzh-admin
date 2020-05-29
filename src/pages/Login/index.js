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
        <p>THIS IS LOGIN PAGE</p>
        <div><Link to={'/Home'}>Go To Home</Link></div>
      </div>
    )
  }
}

export default Login
