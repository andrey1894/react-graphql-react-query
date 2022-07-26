import axios, { AxiosResponse } from "axios";
import { IPost } from "../models";

export class PostService {
  static async getPosts(limit = 10, page = 1): Promise<AxiosResponse<IPost[]>> {
    const res = await axios.get<IPost[]>(
      `https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _limit: limit,
          _page: page,
        }
      }
    );

    return res;
  }
}
