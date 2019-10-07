import {makeExecutableSchema, gql} from 'apollo-server';
import { GraphQLSchema} from 'graphql';
import {Cache} from'./cache';

const typeDefs = gql` 
    scalar JSON   
    type Query {        
        searchClientByParams(params:JSON) : [Client]
    }
    type Client {
        lastName: String
        firstName: String
    }
`;


class Client{
    private lastName!: string;   
    private firstName!: string;
   
    public getLastLastName():string{
       return this.lastName;
    }
    
    public setLastName(lName:string):void{
        this.lastName = lName;
    }

    public getFirstName():string{
        return this.firstName;
    }

    public setFirstName(fName:string):void{
        this.firstName = fName;
    }
}

const searchClientByParamsAPI = (
    _source:any, 
    {params}:any,
    {dataSources}:any
):Array<Client> =>{  //if promise then -- Promise<void | Array<Client>>
    debugger
    let cash = dataSources.CacheAPI; 
    let cashTwo = new Cache();
    if(params === "1"){          
      let client = new Client();   
      let client1 = new Client(); 
      let listClients = new Array<Client>();   
      client.setFirstName("evgen!!!");
      client.setLastName("baranov!!!");
      client1.setFirstName("evgen11111");
      client1.setLastName("baranov1111111");             
      listClients.push(client);
      listClients.push(client1);
      return listClients;        
    }else{
        return new Array<Client>();
    }    
}

const resolvers = {
    Query: {
        searchClientByParams: searchClientByParamsAPI
    }
};


const schema:GraphQLSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});


export default {schema:schema};