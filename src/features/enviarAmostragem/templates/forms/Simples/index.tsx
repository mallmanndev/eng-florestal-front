import Grid from '@mui/material/Grid';

import { TextField } from '../../../../../components/unform';

const AmostragemSimplesForm = () => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          name="area_populacao"
          label="Area da População (ha)"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="nivel_significancia"
          label="Nível de Significância"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="erro_requerido"
          label="Erro requerido"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="area_parcela"
          label="Área da parcela (ha)"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>
    </>
  );
};
export default AmostragemSimplesForm;
