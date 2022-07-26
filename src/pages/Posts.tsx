import { useEffect, useState } from "react";

import PageLayout from "../components/layout/PageLayout";
import ModalCreatePost from "../components/post/ModalCreatePost";
import PostList from "../components/post/PostList";
import Counter from "../components/Counter";
import { IPost } from "../models";
import SearchPost from "../components/post/SearchPost";
import { useFetching, useFilteredPosts } from "../hooks";
import { PostService } from "../api";
import Loader from "../components/UI/Loader/Loader";

function Pages() {
  const [_posts, setPosts] = useState<IPost[]>([]);

  const [postFilter, searchPost] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [visibleCreatePostModal, changeVisibleCreatePostModal] =
    useState(false);
  const posts = useFilteredPosts(_posts, postFilter);

  const [fetchPosts, isPostsLoading, postError]= useFetching(async () => {
    const response = await PostService.getPosts(limit, page);
    setPosts(response.data);
    setTotalCount(+response.headers['x-total-count']);
  })

  useEffect(() => {
    fetchPosts();
  }, []);

  function createPost(post: any) {
    setPosts([..._posts, post]);
  }

  function removePost(id: number) {
    setPosts(_posts.filter((post) => post.id !== id));
  }

  return (
    <PageLayout>
      <Counter />
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => changeVisibleCreatePostModal(true)}
        >
          Add post
        </button>
      </div>
      <SearchPost onSearchPost={searchPost} />
      {postError && <div className="alert alert-danger">{postError}</div>}
      {isPostsLoading ? (
        <section className="d-flex justify-content-center"><Loader /></section>
      ) : (
        <PostList posts={posts} onRemove={removePost} />
      )}

      <ModalCreatePost
        visible={visibleCreatePostModal}
        onCreatePost={createPost}
        setVisible={(visible: boolean) => changeVisibleCreatePostModal(visible)}
      />
    </PageLayout>
  );
}

export default Pages;
