export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="posts row">
        {props.posts.map((post) => (
          <div className="col-4" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt="" />
            <button class="btn btn-primary" onClick={() => props.onSelectPost(post)}>
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
