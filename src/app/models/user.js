const bcrypt = require('bcryptjs');
const mongoose = require('../../config/db');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  const hashpass = await bcrypt.hash(this.pass, 10);
  this.pass = hashpass;
  next();
});
const user = mongoose.model('User', userSchema);
module.exports = user;
