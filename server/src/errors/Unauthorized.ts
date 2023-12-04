import { HttpError } from 'routing-controllers';

export class Unauthorized extends HttpError {
  constructor(public readonly message: string) {
    super(401);
  }

  public toJSON() {
    return {
      message: this.message,
      status: this.httpCode
    };
  }
}
