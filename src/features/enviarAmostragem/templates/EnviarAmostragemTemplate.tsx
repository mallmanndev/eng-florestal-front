import { Button, Grid, Typography } from '@mui/material';
import { Form } from '@unform/web';
import { useEffect, useRef } from 'react';

import { TextField } from '../../../components/unform';
import SelecionaAmostragemButton from '../components/SelecionaAmostragemButton';

type TFormData = {
  title: string;
};

type TEnviarAmostragemTemplateProps = {
  formErrors: { [key: string]: string };
  onAmostragemChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (data: any) => void;
};

const EnviarAmostragemTemplate = ({
  formErrors,
  onAmostragemChange,
  onFormSubmit,
}: TEnviarAmostragemTemplateProps) => {
  const formRef = useRef<any>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.setErrors(formErrors);
    }
  }, [formErrors]);

  return (
    <Form
      ref={formRef}
      initialData={{ nome: 'gasdasd' }}
      onSubmit={onFormSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Envio de amostragem</Typography>
        </Grid>

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
          <SelecionaAmostragemButton onChange={onAmostragemChange} />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Enviar amostragem
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EnviarAmostragemTemplate;
