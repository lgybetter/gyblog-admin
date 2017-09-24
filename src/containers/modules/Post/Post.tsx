import { IPosts, IPost } from '../../../models/post';
import { IPostState } from '../../../reducers/posts';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { IState } from '../../../reducers/state';
import { autobind } from 'core-decorators';
import { getPosts } from  '../../../actions/post';
import { Table } from 'antd';


import './Post.css';

interface PostState {
  posts: IPosts
}

interface PostProps extends RouteComponentProps<Post> {
  postState: IPostState
  dispatch: Dispatch<{}>
}

const mapStateToProps = (state: IState) => {
  return {
    postState: state.postState
  }
}

const columns = [
  { title: '标题', dataIndex: 'title', key: 'title' },
  { title: '副标题', dataIndex: 'subTitle', key: 'subTitle' },
  { title: '时间', dataIndex: 'created', key: 'created' }
]

@(connect(mapStateToProps) as any)
@(withRouter as any)
@autobind
class Post extends React.Component<PostProps, PostState> {
  constructor () {
    super ();
    this.state = {
      posts: {
        totalCount: 0,
        list: []
      }
    }
  }
  async componentDidMount () {
    await this.props.dispatch(getPosts())
    this.setState({
      posts: this.props.postState.posts
    })
  }
  render () {
    return (
      <Table columns={columns} dataSource={this.state.posts.list.map((post: IPost, index: number) => ({
        key: index,
        title: post.title,
        subTitle: post.subTitle,
        created: post.created
      }))}/>
    )
  }
}

export default Post