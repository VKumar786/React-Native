const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema({
  // name:{
  //     type:String,
  //     required:true,
  //     unique:true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      console.warn(err, isMatch);
      if (err) return reject(err);
      if (!isMatch) return reject(false);

      return resolve(true);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
