import { ZodObject } from 'zod';
import Dexie, { Table } from 'dexie';
import { TypeOf } from 'zod/lib/types';

export interface IModel {
  schema: ZodObject;
  db?: Dexie;
  table?: Table<TypeOf<ZodObject>>;
  defaultValues?: any;
}
