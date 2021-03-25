import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        email: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

`);
