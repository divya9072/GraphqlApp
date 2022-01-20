const {gql}=require('apollo-server-express');
const typeDefs=gql`
type Demo{
    id:ID
    Username:String
    Password:String
    email:String
}

type Query{
    hello:String
    getAllPosts:[Demo]
}

type Mutation{
    createPost(
        Username:String!
        Password:String!
        email:String!
        ):Demo
}
`;

module.exports=typeDefs;

// will use later for login 
// input PostInput{
//     Username:String
//     Password:String
//     email:String
// }
