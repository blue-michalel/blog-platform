import { Get, JsonController } from 'routing-controllers';

@JsonController('/')
export default class StatusController {
  @Get()
  getStatus() {
    return { status: 'ok' };
  }
}
