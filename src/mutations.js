import {gql} from '@apollo/client';

export const CREATE_USER=gql`
mutation createUser($email:String!, $username:String!, $password:String!){
    createUser(email:$email,username:$username,password:$password){
        success,
        error,
        message
    }
}
`