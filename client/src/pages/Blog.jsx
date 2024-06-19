import "..styles/Blog.css";
import { useState } from "react";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleTitleChange = (e) => {
    setNewPostTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creates a new blog post object
    const newPost = {
      id: blogPosts.length + 1,
      title: new newPostTitle(),
      content: newPostContent,
    };

    // Updates the blogPosts state with the new post
    setBlogPosts([...blogPosts, newPost]);

    // Clear the input fields after submission
    setNewPostTitle("");
    setNewPostContent("");
  };

  return (
    <div className="blogContainer">
      <div className="blogHeader">
        <h1>My Blogs</h1>
        <p>Checkout my blogs below</p>
      </div>

      <div className="newPostContainer">
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            value={newPostTitle}
            onChange={handleTitleChange}
          />

          <textarea
            placeholder="Enter Content"
            value={newPostContent}
            onChange={handleContentChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {blogPosts.map((post) => (
        <div key={post.id} className="blogPost">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
