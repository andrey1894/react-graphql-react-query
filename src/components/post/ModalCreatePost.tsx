import React, { MouseEventHandler, useState } from "react";

import MyInput from "../UI/MyInput";
import { IPost } from "../models/post.model";

const ModalCreatePost = ({
  visible,
  setVisible,
  onCreatePost,
}: {
  visible: boolean;
  setVisible: Function;
  onCreatePost: Function;
}) => {
  const rootClasses = ["modal", "fade"];
  if (visible) {
    rootClasses.push("show");
  }

  const [post, setPost] = useState<IPost>({} as IPost);

  const addNewPost = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!post.title || !post.body) {
      return;
    }

    const newPost = {
      ...post,
      id: new Date().getTime(),
    };

    setPost({} as IPost);

    onCreatePost(newPost);
    setVisible(false);
  };

  return (
    <div
      className={rootClasses.join(" ")}
      style={{ display: visible ? "block" : "none" }}
      onClick={() => setVisible(false)}
    >
      <div className="modal-dialog" onClick={(e: any) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setVisible(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form action="" onSubmit={addNewPost}>
              <div className="mb-2">
                <MyInput
                  value={post.title || ""}
                  onChange={(e: any) =>
                    setPost({ ...post, title: e.target.value })
                  }
                  type="text"
                  placeholder="Title"
                />
              </div>

              <div className="mb-2">
                <MyInput
                  value={post.body || ""}
                  onChange={(e: any) =>
                    setPost({ ...post, body: e.target.value })
                  }
                  type="text"
                  placeholder="Body"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setVisible(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addNewPost();
              }}
            >
              Add post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreatePost;
