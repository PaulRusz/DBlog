import { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const Feed = () => {
  const [Posts, SetPosts] = useState([]);

  useEffect(() => {
    // Fetch Data From API 
    const FetchPosts = async () => {
      const Response = await fetch('https://api.example.com/posts'); // Replace with API...
      const Data = await Response.json();
      SetPosts(Data);
    };

    FetchPosts();
  }, []);

  return (
    <div className='Feed'>
      {Posts.map(Post => (
        <BlogPost
          key={Post.id}
          Title={Post.title}
          Author={Post.author}
          Content={Post.content}
          Date={Post.date}
        />
      ))}
    </div>
  );
};

export default Feed;