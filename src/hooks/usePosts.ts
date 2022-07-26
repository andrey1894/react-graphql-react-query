import { useMemo } from "react";
import { IPost } from "../models";

export const useFilteredPosts = (posts: IPost[], postFilter: string) => {
    const resultPosts = useMemo(() => {
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(postFilter.toLowerCase()));
        return filteredPosts;
      }, [posts, postFilter]);

    return resultPosts;
}