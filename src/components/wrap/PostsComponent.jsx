import React from "react";

const PostsComponent = ({ posts, loading }) => {
  return (
    <>
      {loading === true ? (
        <div> loading... </div>
      ) : (
        <div className="col2">
          <div className="title-box">
            <h4>공지사항</h4>
          </div>
          <div className="text-box">
            <ul>
              {posts.map((post)=> (<li key={post.id}>{post.title}</li>))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PostsComponent;
