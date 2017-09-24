import * as React from 'react';
import { RouteComponentProps } from 'react-router'

interface AdminProps extends RouteComponentProps<Admin> {
}
class Admin extends React.Component<AdminProps> {
  render () {
    return (
      <div>管理员</div>
    )
  }
}

export default Admin;