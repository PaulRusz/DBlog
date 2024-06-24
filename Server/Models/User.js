const { Schema, model } = require('mongoose');
const Bcrypt = require('bcrypt');

const UserSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 8,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must Match An Email Address!'],
    },
    Avatar: {
      type: String,
      required: true,
      enum: ['Avatar1', 'Avatar2', 'Avatar3'],
      default: 'Avatar1',
    },
    User_Image: {
      type: String, // Store The Path To The Uploaded Image
    },
    Posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    Friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Hash User Password
UserSchema.pre('Save', async function (Next) {
  if (this.isNew || this.isModified('Password')) {
    const SaltRounds = 10;
    this.Password = await Bcrypt.hash(this.Password, SaltRounds);
  }

  Next();
});

// Compare And Validate User Password For Logging In
UserSchema.methods.IsValidPassword = async function (Password) {
  return await Bcrypt.compare(Password, this.Password);
};

// Get The User's Friend Count
UserSchema.virtual('FriendCount').get(function () {
  return this.Friends.length;
});

// Add Friend Via FriendId To Friends Array
UserSchema.methods.AddFriend = function(FriendId) {
  if (!this.Friends.includes(FriendId)) {
    this.Friends.push(FriendId);
  }
};

// Remove Friend Via FriendId From Friends Array
UserSchema.methods.RemoveFriend = function(FriendId) {
  this.Friends = this.Friends.filter(Friend => Friend.toString() !== FriendId.toString());
};

// Maybe Add A Query For Mutual Friends When Searching Users

const User = model('User', UserSchema);

module.exports = User;