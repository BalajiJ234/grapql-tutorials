import { makeExecutableSchema } from "graphql-tools";
import {resolvers} from "./resolvers";

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        TRANGENDER
        NOT_PREFER_TO_SAY
        OTHERS
    }

    type Query {
        getOneFriend(id: ID): Friend
        getAliens: [Alien]
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }

`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export {schema};

// import { buildSchema } from "graphql";

// const schema = buildSchema(`
//     type Friend {
//         id: ID
//         firstName: String
//         lastName: String
//         gender: Gender
//         age: Int
//         email: String
//         contacts: [Contact]
//     }

//     type Contact {
//         firstName: String
//         lastName: String
//     }

//     enum Gender {
//         MALE
//         FEMALE
//         TRANGENDER
//         NOT_PREFER_TO_SAY
//         OTHERS
//     }

//     type Query {
//         getFriend(id: ID): Friend
//     }

//     input FriendInput {
//         id: ID
//         firstName: String
//         lastName: String
//         gender: Gender
//         age: Int
//         email: String
//         contacts: [ContactInput]
//     }

//     input ContactInput {
//         firstName: String
//         lastName: String
//     }

//     type Mutation {
//         createFriend(input: FriendInput): Friend
//     }

// `);

// export default schema;
