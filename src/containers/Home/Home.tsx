import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../reducers/state';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { autobind } from 'core-decorators';
import { Layout, Menu, Icon } from 'antd';
import { Admin, CommonUsers, Post } from '../modules'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import './Home.css';

interface HomeState {
  userToken: string;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/13689
interface HomeProps extends RouteComponentProps<Home> {
  token: string;
  dispatch: Dispatch<{}>;
}

const mapStateToProps = (state: IState) => {
  return {
    token: state.adminState.token
  };
};

@(connect(mapStateToProps) as any)
@autobind
class Home extends React.Component<HomeProps, HomeState> {
  constructor() {
    super();
    this.state = {
      userToken: 'lgy'
    };
  }
  private changeRoute (path: string) {
    this.props.history.push(`/${path}`)
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['gy-blog']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="gy-blog">GyBlog</Menu.Item>
            <Menu.Item key="gy-player">GyPlayer</Menu.Item>
            <Menu.Item key="gy-note">GyNote</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ marginTop: '24px', padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff', borderRight: '1px solid #e9e9e9 ' }}>
              <Menu
                mode="inline"
                onSelect={ ({item, key }) => this.changeRoute(key)}
                defaultSelectedKeys={['common-users']}
                defaultOpenKeys={['user-manage']}
                style={{ height: '100%', border: 0 }}>
                <SubMenu key="user-manage" title={<span><Icon type="user" />用户管理</span>}>
                  <Menu.Item key="common-users">普通用户</Menu.Item>
                  <Menu.Item key="admin">管理员</Menu.Item>
                </SubMenu>
                <SubMenu key="post-manage" title={<span><Icon type="laptop" />文章管理</span>}>
                  <Menu.Item key="open-posts">公开文章</Menu.Item>
                  <Menu.Item key="private-posts">私有文章</Menu.Item>
                </SubMenu>
                <SubMenu key="label-manage" title={<span><Icon type="notification" />标签管理</span>}>
                  <Menu.Item key="labels">标签库</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 650 }}>
              <Route path="/admin" component={Admin}/>
              <Route path="/common-users" component={CommonUsers}/>
              <Route path="/open-posts" component={Post}/>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          GyAdmin ©2017 Created by lgybetter
        </Footer>
      </Layout>
    );
  }
}

export default Home;
