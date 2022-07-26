import { TransitionGroup, CSSTransition } from "react-transition-group";
import { IPost } from "../../models";
import PostItem from "./PostItem";

const PostList = ({
  posts,
  onRemove,
}: {
  posts: IPost[];
  onRemove: Function;
}) => {
  return (
    <div className="container">
      <TransitionGroup>
        {posts.length ? (
          posts.map((post) => (
            <CSSTransition key={post.id} timeout={500} classNames="item">
              <section className="mb-4">
                <PostItem post={post} onRemove={() => onRemove(post.id)} />
              </section>
            </CSSTransition>
          ))
        ) : (
          <div className="alert alert-primary">No posts</div>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
