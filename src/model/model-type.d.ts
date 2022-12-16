import { ZodType } from 'zod';
import Dexie, { Table } from 'dexie';
import { TypeOf } from 'zod/lib/types';

export interface IModel {
  schema: ZodType;
  db?: Dexie;
  table?: Table<TypeOf<ZodType>>;
  defaultValues?: any;
}
