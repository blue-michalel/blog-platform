export enum Actions {
  ALL_POST = 'POST'
}

export class Permission {
  read: Actions[] = [];
  create: Actions[] = [];
  update: Actions[] = [];
  delete: Actions[] = [];
}
