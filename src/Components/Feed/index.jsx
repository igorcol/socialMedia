import React from 'react';
import Post from './Post';
import Share from './Share';
import './styles.css';

const Posts = [
  {
  user: {
      username: "Igor Colombini",
      image: "assets/person/2.jpeg"
  },
  description: "Qui dolor occaecat incididunt qui et nulla id esse. Aliquip in ipsum dolore occaecat laboris pariatur culpa sint esse laborum culpa cillum ullamco. Et exercitation laboris excepteur cupidatat ea labore. Officia esse ea quis aute.",
  image: "assets/post/1.jpeg"
  },
  {
  user: {
      username: "Fabio Colombini",
      image: "assets/person/3.jpeg"
  },
  description: "Qui dolor occaecat incididunt qui et nulla id esse. Aliquip in ipsum dolore occaecat laboris pariatur culpa sint esse laborum culpa cillum ullamco. Et exercitation laboris excepteur cupidatat ea labore. Officia esse ea quis aute.",
  image: ""
  },
  {
  user: {
      username: "Karine Colombini",
      image: "assets/person/4.jpeg"
  },
  description: "",
  image: "assets/post/3.jpeg"
  },
]


function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share/>

          {
            Posts.map(post => (
              <Post key={post.user}
                user={post.user}
                description={post.description}
                image={post.image}
              />
            ))
          }

      </div>
    </div>
  );
};

export default Feed;
