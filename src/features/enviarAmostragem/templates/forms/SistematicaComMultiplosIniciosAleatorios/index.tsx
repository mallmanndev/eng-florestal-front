import Grid from '@mui/material/Grid';

import { TextField } from '../../../../../components/unform';

const AmostragemSistematicaComMultiplosIniciosAleatoriosForm = () => {
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
            name="interface"
            label="Inferface"
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
            name="erro_amostragem_requirido"
            label="Erro da amostragem requirido"
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
  export default AmostragemSistematicaComMultiplosIniciosAleatoriosForm;