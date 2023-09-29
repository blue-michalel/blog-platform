import { Get, JsonController } from 'routing-controllers';

@JsonController('/status')
export default class StatusController {
  @Get()
  getStatus() {
    return { status: 'ok' };
  }
}
