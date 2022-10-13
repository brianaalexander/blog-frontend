export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>

      <div className="row">
        {props.posts.map((post) => (
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
