import { buildSchema } from "graphql";

// export const schemaOne = buildSchema(`
//     type Query {
//         hello: String
//     }
// `)

//For example, adding array of emails
//If you add any field mandatory, use ! (Exclamatory) Symbol
export const schemaTwo = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        friend: Friend
    }
`);
