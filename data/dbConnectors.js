import mongoose from "mongoose";
import Sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

// MongoDB connection
mongoose.Promise = global.Promise;
const URI =
  "mongodb+srv://admin:123456@Bala@cluster0.bofvb.mongodb.net/friends?retryWrites=true&w=majority";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  language: {
    type: String,
  },
  email: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});

const Friends = mongoose.model("friends", friendSchema);

//SQL
const sequelize = new Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "./alien.sqlite",
});

const Aliens = sequelize.define("aliens", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planetName: { type: Sequelize.STRING },
});

export { Friends, Aliens };
