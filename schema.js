import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        isFriend: Boolean
        stock: [Stock]
        email: String
    }

    type Stock {
        id: ID
        price: Float
        closingPrice: Float
        name: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

`);
