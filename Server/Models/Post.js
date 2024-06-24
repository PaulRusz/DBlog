const { Schema, model } = require('mongoose');
const CommentSchema = require('./Comment');
const DateFormat = require('../Utils/DateFormat');

const PostSchema = new Schema(
  {
    PostTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    PostText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 500,
    },
    PostTag: {
      type: String,
      required: true,
      enum: ['Tag1', 'Tag2', 'Tag3'],
      default: 'Tag1',
    },
    PostImage: {
      type: String, // Store the path to the uploaded image for the post
    },
    CreatedAt: {
      type: Date,
      default: Date.now,
      get: Timestamp => DateFormat(Timestamp)
    },
    Username: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    Comments: [CommentSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

PostSchema.virtual('CommentCount').get(function() {
  return this.Comments.length;
});

const Post = model('Post', PostSchema);

module.exports = Post;