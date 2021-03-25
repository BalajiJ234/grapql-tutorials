import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
    }

    enum Gender {
        MALE
        FEMALE
        TRANGENDER
        NOT PREFER TO SAY
        OTHERS
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

`);
