import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search Filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      <div className="row">
        {props.posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
            <div className="col-md-3 mb-4" key={post.id}>
              <div className="card">
                <img src={post.image} className="card-img-top" alt="..." />
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button class="btn btn-primary" onClick={() => props.onSelectPost(post)}>
                  More info
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
