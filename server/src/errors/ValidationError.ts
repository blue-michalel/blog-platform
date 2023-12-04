import { type ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { HttpError } from 'routing-controllers';

import { VALIDATION_ERROR } from '../constants/text';

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

  static async asserType<T extends object>(model: ClassConstructor<T>, plain: unknown) {
    const data = plainToInstance(model, plain);
    const errors = await validate(data);

    if (errors.length !== 0) {
      throw new ValidationError(VALIDATION_ERROR, errors);
    }
  }
}
