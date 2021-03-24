import {buildSchema} from 'graphql';

// export const schemaOne = buildSchema(`
//     type Query {
//         hello: String
//     }
// `)

export const schemaTwo = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
    }

    type Query {
        friend: Friend
    }
`)

