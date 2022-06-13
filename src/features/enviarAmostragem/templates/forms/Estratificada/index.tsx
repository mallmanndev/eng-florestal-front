import Grid from '@mui/material/Grid';

import { TextField } from '../../../../../components/unform';

const AmostragemEstratificadaForm = () => {
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
          label="Nível de significância"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="erro_requerido"
          label="Erro da amostragem requerido"
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

      <Grid item xs={12}>
        <TextField
          name="potencial_estrato1"
          label="Número pontencial de unidades no estrato I"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="potencial_estrato2"
          label="Número pontencial de unidades no estrato II"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="potencial_estrato3"
          label="Número pontencial de unidades no estrato III"
          variant="outlined"
          fullWidth
          type="number"
          inputProps={{ min: 0 }}
        />
      </Grid>
    </>
  );
};
export default AmostragemEstratificadaForm;
