import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./service.scss";
import axios from "axios";
import PostsComponent from "./PostsComponent";
import PageNationComponent from "./PageNationComponent";

export default function ServiceComponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLast = currentpage * postsPerPage; //현재 페이지 마지막 번째 글
  const indexOfFirst = indexOfLast - postsPerPage; // 현재 페이지 첫번째 글
  const currentPosts = (posts)=>{
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast); // 슬라이스 메서드 ex 0번째부터 10-1번째
    return currentPosts;
  }

  console.log(posts);

  return (
    <div id="service">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="col1">
              <div className="nav">
                <div className="title">
                  <h3>
                    <Link to="/service">고객센터</Link>
                  </h3>
                </div>
                <ul>
                  <li>
                    <h4>공지사항</h4>
                    <ul>
                      <li>
                        <Link>자주 묻는 질문</Link>
                      </li>
                      <li>
                        <Link>검수 기준</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <PostsComponent posts={currentPosts(posts)} loading={loading} />
            <PageNationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
          </div>
        </div>
      </div>
    </div>
  );
}
