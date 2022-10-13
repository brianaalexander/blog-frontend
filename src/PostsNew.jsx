export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form action="">
        <div>
          Title: <input className="form-control" type="text" />
        </div>
        <div>
          Body: <input className="form-control" type="text" />
        </div>
        <div>
          Image: <input className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
