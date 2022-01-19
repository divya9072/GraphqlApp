const express=require('express')
const {ApolloServer,gql}=require('apollo-server-express')
const typeDefs=require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose=require('mongoose');



async function startServer(){
 const app=express();
 const apolloServer=new ApolloServer({
     typeDefs,
     resolvers,
 });
 await apolloServer.start()

 apolloServer.applyMiddleware({app:app});

 app.use((req,res)=>{
     res.send("Hello From Apollo Server");
 })
mongoose.connect('mongodb+srv://Divya9072:Divimg9072@cluster0.dvcx3.mongodb.net/usertable_details?retryWrites=true&w=majority',()=>console.log("DB Connected"));
 app.listen(4000,()=>console.log("Apollo Server Is Running"))
}
startServer();