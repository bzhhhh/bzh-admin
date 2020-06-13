import React from 'react'
import { Link } from "react-router-dom"
import './index.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


class Login extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    const onFinish = values => {
      console.log('Received values of form: ', values);
    }
    return (
      <div className="login-page">
        <div className="login-content">
          <h2>猫崽无限公司管理后台</h2>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <Button type="link">
                忘记密码
            </Button>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                <Link to="/home">登录</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
