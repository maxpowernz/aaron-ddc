import { ZodObject } from 'zod';
import Dexie, { Table } from 'dexie';
import { TypeOf } from 'zod/lib/types';
import { DefaultValues } from 'react-hook-form/dist/types/form';

export interface IModel {
  schema: ZodObject;
  db?: Dexie;
  table?: Table<TypeOf<ZodObject>>;
  defaultValues?: DefaultValues;
}
