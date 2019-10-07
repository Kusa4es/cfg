import React from 'react';
import App from 'next/app';
import fetch from "isomorphic-unfetch";
import ApolloClient from 'apollo-boost';
 import {ApolloProvider} from "react-apollo";

 class PageProps {
  private userName!:string;

  public getUserName():string{
    return this.userName;
  }
  public setUserName(userName:string){
    this.userName = userName;    
  }
}

interface NextJS_Global extends NodeJS.Global{
  fetch:any; 
}



if (!process.browser) {
  debugger  
  let globaFetch = {} as NextJS_Global;
  globaFetch.fetch = fetch;
}

const apolloClient = new ApolloClient({
  uri: `http://localhost:4000/graphql`  
});


class MyApp extends App {

  static async getInitialProps(props:any) {
    debugger
    let ctx = props.ctx; 
    let pageProps = new PageProps();
    pageProps.setUserName("evgen");                 
    return {pageProps};
  }

  render() {
    const { Component, pageProps } = this.props
    return  (
     
        <ApolloProvider client={apolloClient}>
          <Component 
            {...pageProps} 
            apolloClient={apolloClient}
          />
        </ApolloProvider>
     
    )
    //return <Component {...pageProps} />        
  }
}

export default MyApp