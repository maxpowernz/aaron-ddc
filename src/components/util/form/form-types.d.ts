import React from 'react';
import { Control } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { IndexableType } from 'dexie';

import { IInputProps, IOptionProps } from '@/src/components/ui/inputs';
import { IModel } from '@/src/model/model-type';

export interface IFieldProps extends IInputProps {
  question?: string;
  control?: Control;
  component: React.ComponentType<any>;
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  scope?: IUseScopeProps;
}

export interface ITargetFieldProps extends Omit<IFieldProps, 'control' | 'question'> {}

export interface IFieldGroupProps extends Omit<IFieldProps, 'component'> {
  fields: ITargetFieldProps[];
}

export interface ILoadTableProps {
  form: UseFormReturn;
  uid: IndexableType;
  model: IModel;
}

export interface ILoadTableReturnProps<T> {
  result?: T;
  count?: number;
  isLoaded?: boolean;
}

type ConditionProps = number | boolean | string | {};

interface IUseScopeProps {
  source?: string;
  condition?: ((controlValue: ConditionProps) => boolean) | ConditionProps;
  values?: Record<string, IOptionProps[]>;
}

interface IUseScopeReturn {
  isVisible: boolean;
  options: IOptionProps[];
}
