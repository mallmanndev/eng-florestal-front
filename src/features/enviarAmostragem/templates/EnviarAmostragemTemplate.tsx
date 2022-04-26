import styled from '@emotion/styled';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { Form } from '@unform/web';

import { TextField } from '../../../components/unform';

const Input = styled('input')({
  display: 'none',
});

type TFormData = {
  title: string;
};

const EnviarAmostragemTemplate = () => {
  const handleSubmit = (data: TFormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              variant="contained"
              component="span"
              startIcon={<UploadFileIcon />}
              color="secondary"
            >
              Carregar amostragem
            </Button>
          </label>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">Enviar amostragem</Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EnviarAmostragemTemplate;
