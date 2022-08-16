import Grid from '@mui/material/Grid';

import { TextField } from '../../../../../components/unform';

const AmostragemTotalForm = () => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          name="area_populacao_primeira_ocasiao"
          label="Área da população na primeira ocasião (ha)"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="area_populacao_segunda_ocasiao"
          label="Área da população na segunda ocasião (ha)"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="nivel_significancia"
          label="Nível de significância (a)"
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
export default AmostragemTotalForm;
