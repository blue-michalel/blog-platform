import { AxiosInstance } from 'axios';
import instance from 'services/api/config';
import { LoginCommand } from '../models/login-command';

class AuthenticationApi {
  constructor(private http: AxiosInstance) {}

  public login = (data: LoginCommand) => this.http.post('/auth/login', data);
}

const authenticationApi = new AuthenticationApi(instance);
export default authenticationApi;
