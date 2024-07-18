import { useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
