const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: { type: String },
  displayName: { type: String },
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
