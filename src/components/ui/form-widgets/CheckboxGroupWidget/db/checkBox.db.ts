import { z } from 'zod';
import Dexie, { Table } from 'dexie';

export const schema = z.object({
  accountType: z.string().optional(),
});

export type FormValues = z.infer<typeof schema>;

class StoriesDB extends Dexie {
  checkBoxStories!: Table;

  constructor() {
    super('ddc-stories');
    this.version(1).stores({
      checkBoxStories: '++, [accountType]',
    });
  }
}

export const storiesDB = new StoriesDB();
export const table = storiesDB.checkBoxStories;
