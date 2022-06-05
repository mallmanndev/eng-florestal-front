/* eslint-disable react/require-default-props */
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Form } from '@unform/web';
import { ReactNode, useEffect, useRef } from 'react';

import { TextField } from '../../../../../components/unform';
import Select from '../../../../../components/unform/Select';
import SelecionaAmostragemButton from '../../../components/SelecionaAmostragemButton';
import { TAmostragemTab } from '../../../types/tabs';

type TFormBase = {
  amostragens: TAmostragemTab[];
  children: ReactNode;
  formErrors?: { [key: string]: string };
  onAmostragemChange?: (value: string) => void;
  onSubmit: (data: any) => void;
};

const FormBase = ({
  formErrors,
  amostragens,
  onSubmit,
  children,
  onAmostragemChange,
}: TFormBase) => {
  const formRef = useRef<any>(null);

  useEffect(() => {
    if (formErrors && formRef.current) {
      formRef.current.setErrors(formErrors);
    }
  }, [formErrors]);

  const handleFileChange = () => {
    console.log('handleFileChange');
  };

  const handleAmostragemChange = (e: any) => {
    onAmostragemChange?.(e.target.value);
  };

  return (
    <Form ref={formRef} onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="nome" label="Nome" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="responsavel"
            label="Responsável"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="descricao"
            label="Descrição"
            variant="outlined"
            fullWidth
            multiline
          />
        </Grid>

        <Grid item xs={12}>
          <Select
            label="Amostragem"
            name="amostragem"
            options={amostragens.map((item) => ({
              label: item.label,
              value: item.label.toLowerCase().split(" ").join(""),
              disabled: item.disabled,
            }))}
            onChange={handleAmostragemChange}
          />
        </Grid>

        {children}

        <Grid item xs={12}>
          <SelecionaAmostragemButton onChange={handleFileChange} />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Calcular Amostragem
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default FormBase;
