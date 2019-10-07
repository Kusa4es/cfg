import React from 'react';
import { NextPageContext } from 'next';
import call from '../src/lib/myTest';

interface Props {
  userAgent?: string
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {  
     //debugger  
      let a:number = call();
    const { userAgent } = this.props
    return <main>Your user agent: {userAgent}</main>
  }
}