import { HttpError } from 'routing-controllers';

export class PermissionDenied extends HttpError {
  constructor(public readonly message: string) {
    super(403);
  }

  public toJSON() {
    return {
      message: this.message,
      status: this.httpCode
    };
  }
}
