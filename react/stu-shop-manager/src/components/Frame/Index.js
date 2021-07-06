import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import { adminRoutes } from '../../routes'
import login from '../../images/logo192.png'
import './Index.css'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Index(props) {
  const routes = adminRoutes.filter(item => item.isShow)
  return (
    <Layout>
      <Header className="header">
        <div className="logo" style={{ height: "100%" }}> <img src={login} alt="" style={{ height: "100%" }} /> </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              routes.map(item => {
                return (
                  <Menu.Item key={item.path}>
                    {item.title}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
