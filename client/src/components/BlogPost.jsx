const BlogPost = ({ Title, Author, Content, Date }) => {
  return (
    <div className="blog-post">
      <h2>{Title}</h2>
      <p>by {Author} on {Date}</p>
      <div>{Content}</div>
    </div>
  );
};

export default BlogPost;