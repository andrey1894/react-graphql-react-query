import { IPost } from "../models";

const PostItem = ({ post, onRemove }: { post: IPost, onRemove: Function }) => {
  return (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="">
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="">
              <button onClick={() => onRemove()} className="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
