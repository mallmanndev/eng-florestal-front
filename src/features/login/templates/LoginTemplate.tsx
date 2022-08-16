import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Form } from '@unform/web';
import { useRef } from 'react';

import { TextField } from '../../../components/unform';

type TLoginTemplateProps = {
  onSave: (values: any) => void;
};

const TemplateLogin = ({ onSave }: TLoginTemplateProps) => {
  const formRef = useRef<any>();

  return (
    <Container maxWidth="sm">
      <Form ref={formRef} onSubmit={console.log}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Login</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField name="email" label="Email" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Acessar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default TemplateLogin;
