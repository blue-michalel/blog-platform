import { HttpError } from 'routing-controllers';

export class ValidationError extends HttpError {
  constructor(
    public readonly message: string,
    public readonly errors?: unknown
  ) {
    super(400);
  }

  public toJSON() {
    return {
      message: this.message,
      status: this.httpCode,
      errors: this.errors
    };
  }
}
