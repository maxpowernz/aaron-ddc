import { createContext, useContext } from 'react';
import { IndexableType } from 'dexie';
import { z } from 'zod';
import { IModel } from '@/src/model/model-type';

type KeyType = {
  uid?: IndexableType;
};

export const ModelConext = createContext<IModel & KeyType>({ schema: z.object({}) });
export const useModelContext = () => useContext(ModelConext);
