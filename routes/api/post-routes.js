const router = require('express').Router();
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  addComment,
  removeComment,
} = require('../../controllers/post-controller');

// /api/posts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:postId
router.route('/:postId').get(getSinglePost).put(updatePost).delete(deletePost);

// /api/posts/:postId/comments
router.route('/:postId/comments').post(addComment);

// /api/posts/:postId/comments/:commentId
router.route('/:postId/comments/:commentId').delete(removeComment);

module.exports = router;
