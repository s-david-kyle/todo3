import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="btn btn-primary my-3 ms-1"
      >
        Prev
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-1"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
