/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SelectMUI, { SelectChangeEvent } from '@mui/material/Select';
import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

type TSelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type TSelectProps = {
  name: string;
  label: string;
  options: TSelectOption[];
  onChange?: (e: SelectChangeEvent<any>) => void;
};

const Select = ({ name, label, options, onChange }: TSelectProps) => {
  const strName = name as string;
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(strName);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
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
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <SelectMUI
          inputRef={selectRef}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          defaultValue={defaultValue}
          error={!!error}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
        </SelectMUI>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default Select;
