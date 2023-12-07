import { AxiosInstance } from 'axios';

import instance from 'services/api/config';

import { Post } from '../models/post';

class PostServiceApi {
  constructor(private http: AxiosInstance) {}

  public getPost = (id: string) => this.http.get<Post>(`/posts/${id}`);
}

const postApi = new PostServiceApi(instance);
export default postApi;
