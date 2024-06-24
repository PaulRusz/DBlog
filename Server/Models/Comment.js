const { Schema, model, Types } = require('mongoose');
const DateFormat = require('../Utils/DateFormat');

const CommentSchema = new Schema(
  {
    CommentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    CommentBody: {
      type: String,
      required: true,
      maxlength: 300,
    },
    User: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    CreatedAt: {
      type: Date,
      default: Date.now,
      get: Timestamp => DateFormat(Timestamp)
    },
    Likes: {
      type: Number,
      default: 0,
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// Get Likes Count
CommentSchema.virtual('LikesCount').get(function() {
  return this.Likes;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;