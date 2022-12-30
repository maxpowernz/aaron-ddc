import { z } from 'zod';
import Dexie, { Table } from 'dexie';

export const schema = z.object({
  name: z.string(),
  age: z.number(),
});

export type FormValues = z.infer<typeof schema>;

export class MockDB extends Dexie {
  friends!: Table<FormValues>;

  constructor(name: string, schema: {}) {
    super(name);
    this.version(1).stores(schema);
  }
}
