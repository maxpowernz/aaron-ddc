import { createContext, useContext } from 'react';
import { z } from 'zod';
import { IModel, KeyType } from '@/src/model/model-type';

export const ModelConext = createContext<IModel & { uid: KeyType }>({
  // TODO: default uid set to a random value
  uid: 0,
  schema: z.object({}),
});
export const useModelContext = () => useContext(ModelConext);
