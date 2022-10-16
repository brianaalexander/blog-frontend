export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Body: <input name="body" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="image" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
