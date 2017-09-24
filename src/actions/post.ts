import { createAction } from 'redux-actions'
import { IPosts, IPost } from '../models/post'
import { request } from './request';

const getPosts = createAction<Promise<IPosts>>('getPosts', async () => {
  await request({})
  return {
    totalCount: 120,
    list: [
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() },
      { title: '使用 git rebase 提高 PR 质量', subTitle: '使用 MIT 许可证', image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', created: Date.now() }
    ]
  }
})

const getPost = createAction<Promise<IPost>>('getPost', async () => {
  await request({})
  return { 
    title: '使用 git rebase 提高 PR 质量', 
    subTitle: '使用 MIT 许可证', 
    image: 'https://user-gold-cdn.xitu.io/2017/7/24/d2bf033096fb4429b0c916ad8663cf5e?imageView2/1/w/100/h/100/q/85/interlace/1', 
    created: Date.now() 
  }
})

export {
  getPost,
  getPosts
}