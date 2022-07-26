import { useMemo } from "react";
import { IPost } from "../components/models";

export const useFilteredPosts = (posts: IPost[], postFilter: string) => {
    const resultPosts = useMemo(() => {
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(postFilter.toLowerCase()));
        console.log(123)
        return filteredPosts;
      }, [posts, postFilter]);

    return resultPosts;
}