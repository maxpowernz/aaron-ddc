import Dexie, { Table } from 'dexie';

export class DB extends Dexie {
  clientInfos!: Table;
  farmInfos!: Table;

  constructor() {
    super('ddc');
    this.version(1).stores({
      clientInfos: '++, [contactId]',
      farmInfos: '++, [contactId]',
    });
  }
}

export const db = new DB();
