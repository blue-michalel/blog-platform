import { Actions, Permission } from '../models/authentication';

export class UserPermission extends Permission {
  read = [Actions.ALL_POST];
}
