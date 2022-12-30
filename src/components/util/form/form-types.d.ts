import React, { FormEventHandler } from 'react';
import { TypeOf } from 'zod/lib/types';
import { ZodObject } from 'zod';
import { Control } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { UseFormReturn } from 'react-hook-form/dist/types';

import { InputProps, OptionProps } from '@/src/components/ui/inputs';
import { IModel, KeyType } from '@/src/model/model-type';

export type FieldProps = {
  question?: string;
  control?: Control;
  component: React.JSXElementConstructor;
  required?: boolean;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  scope?: UseScopeProps;
} & InputProps;

export type TargetFieldProps = Omit<FieldProps, 'control' | 'question'>;

export type FieldGroupProps = Omit<FieldProps, 'component'> & {
  fields: TargetFieldProps[];
};

export type LoadTableProps = {
  form: Pick<UseFormReturn, 'setValue'>;
  uid: KeyType;
  model: IModel;
};

export type LoadTableReturn<T> = {
  result?: T;
  count?: number;
  isLoaded?: boolean;
};

type CommonType = number | boolean | string | {};

type UseScopeProps = {
  source?: string;
  condition?: ((controlValue: CommonType) => boolean) | CommonType;
  values?: Record<string, OptionProps[]>;
};

type UseScopeReturn = {
  isVisible: boolean;
  options: OptionProps[];
};

export type FormProps = {
  mode?: 'onBlur' | 'onChange' | 'onSubmit';
  model: IModel;
  uid: KeyType;
  onSubmit: (value?: TypeOf<ZodObject> | unknown) => void | FormEventHandler;
  children?: React.ReactElement | React.ReactElement[];
};
