import React from 'react';
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const OurLayout = (props) => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><NavLink to="/">Users</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/groups/">Groups</NavLink></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Design by Ant Design ©2019 Created by Maksym Lytvynchuk
    </Footer>
        </Layout>
    );
};
export default OurLayout;