import { AxiosInstance } from 'axios';
import instance from '../config';
import { Post } from 'services/models';

class PostService {
  constructor(private http: AxiosInstance) {}

  public getAll = () => this.http.get<Post[]>('/posts');
}

const postService = new PostService(instance);
export default postService;
