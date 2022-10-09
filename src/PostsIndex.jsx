export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="posts">
        {props.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt="" />
            <button onClick={() => props.onSelectPost(post)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
