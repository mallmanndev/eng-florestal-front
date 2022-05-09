/* eslint-disable no-param-reassign */
import MUITextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

const TextField = ({ name, ...props }: TextFieldProps) => {
  const strName = name as string;
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(strName);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <MUITextField
      inputRef={inputRef}
      name={strName}
      defaultValue={defaultValue}
      error={!!error}
      helperText={error}
      {...props}
    />
  );
};

export default TextField;
