import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import InputAdornment from '@mui/material/InputAdornment';
import Zoom from '@mui/material/Zoom';
import { TextField } from '../../../../../components/unform';

const AmostragemSimplesForm = () => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          inputProps={{ 
            endAdornment: (
            <InputAdornment position="end">
              <Tooltip TransitionComponent={Zoom} title="tooltip ">
              <HelpIcon />
              </Tooltip>
            </InputAdornment>
          ), 
        }}
          name="area_populacao"
          label="Area da População (ha)"
          variant="outlined"
          fullWidth
          />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="nivel_significancia"
          label="Nível de Significância"
          variant="outlined"
          fullWidth
          inputProps={{ endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="info ">
              <HelpIcon />
              </Tooltip>
            </InputAdornment>
          ),  }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="erro_requerido"
          label="Erro requerido"
          variant="outlined"
          fullWidth
         
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="area_parcela"
          label="Área da parcela (ha)"
          variant="outlined"
          fullWidth
          
        />
      </Grid>
    </>
  );
};
export default AmostragemSimplesForm;
