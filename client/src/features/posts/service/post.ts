import { AxiosInstance } from 'axios';

import instance from 'services/api/config';

import { Post } from '../models/post';

class PostServiceApi {
  constructor(private http: AxiosInstance) {}

  public getAll = () => this.http.get<Post[]>('/posts');
}

const postApi = new PostServiceApi(instance);
export default postApi;
