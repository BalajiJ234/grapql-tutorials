import mongoose from "mongoose";

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

const Friends = mongoose.model('friends', friendSchema);

export { Friends };