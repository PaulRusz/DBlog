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
      maxlength: 300,
    },
    PostTag: {
      type: String,
      required: true,
      enum: ['Tag1', 'Tag2', 'Tag3'],
      default: 'Tag1',
    },
    PostImage: {
      type: String, // Store The Path To The Uploaded Image For The Post
    },
    CreatedAt: {
      type: Date,
      default: Date.now,
      get: Timestamp => DateFormat(Timestamp)
    },
    Username: {
      type: String,
      required: true
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
  return this.comments.length;
});

const Post = model('Post', PostSchema);

module.exports = Post;