import * as React from 'react'
import { RouteComponentProps } from 'react-router'

interface CommonUsersProps extends RouteComponentProps<CommonUsers> {
}

class CommonUsers extends React.Component<CommonUsersProps> {
  render () {
    return (
      <div>普通用户</div>
    )
  }
}

export default CommonUsers