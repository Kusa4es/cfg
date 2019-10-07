import { environment } from './config/environment';
import { ApolloServer, mergeSchemas } from 'apollo-server-express';
import customerSearch from './customerSearch';
import { GraphQLSchema } from 'graphql';
import express   from "express";
import http from 'http';
import {Cache} from './cache';

let schemas: any = [
  customerSearch.schema
];


let mergeAllShemas:GraphQLSchema = mergeSchemas({schemas:schemas});
const apollo:ApolloServer = new ApolloServer({
  schema:mergeAllShemas,
  context: ({req, res} ) => {  
    //debugger
    const auth:string = req.headers.authorization || '';
  },
  dataSources: () => {
    return {   
    CacheAPI: new Cache()
  };
}
});

const app = express();
apollo.applyMiddleware({app});
const server = http.createServer(app);
apollo.installSubscriptionHandlers(server);

server.listen({ port: environment.port }, () =>{
    console.log(
      '🚀 Apollo-server ready at',
      `http://localhost:${environment.port}${apollo.graphqlPath}`
    );
  }
)

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
