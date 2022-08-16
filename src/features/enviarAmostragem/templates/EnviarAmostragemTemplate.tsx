import { Grid, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';

import { TAmostragemTab } from '../types/tabs';
import AmostragemConglomeradosForm from './forms/Conglomerados';
import AmostragemDoisEstagiosForm from './forms/DoisEstagios';
import AmostragemDuplaForm from './forms/Dupla';
import AmostragemEstratificadaForm from './forms/Estratificada';
import FormBase from './forms/FormBase';
import AmostragemIndependenteForm from './forms/Independente';
import AmostragemParcialForm from './forms/Parcial';
import AmostragemSimplesForm from './forms/Simples';
import AmostragemSistematica from './forms/Sistematica';
import AmostragemSistematicaComMultiplosIniciosAleatoriosForm from './forms/SistematicaComMultiplosIniciosAleatorios';
import AmostragemTotalForm from './forms/Total';

type TEnviarAmostragemTemplateProps = {
  formErrors: { [key: string]: string };
  amostragens: TAmostragemTab[];
  onAmostragemChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (data: any) => void;
};

const EnviarAmostragemTemplate = ({
  formErrors,
  amostragens,
  onAmostragemChange,
  onFormSubmit,
}: TEnviarAmostragemTemplateProps) => {
  const [amostragem, setAmostragem] = useState<string>('');

  const handleAmostragemChange = (value: string) => {
    setAmostragem(value);
  };

  const forms: { [key: string]: ReactNode } = {
    simples: <AmostragemSimplesForm />,
    estratificada: <AmostragemEstratificadaForm />,
    independente: <AmostragemIndependenteForm />,
    sistemáticacommúltiplosiníciosaleatórios: (
      <AmostragemSistematicaComMultiplosIniciosAleatoriosForm />
    ),
    dupla: <AmostragemDuplaForm />,
    parcial: <AmostragemParcialForm />,
    total: <AmostragemTotalForm />,
    sistemática: <AmostragemSistematica />,
    conglomerados: <AmostragemConglomeradosForm />,
    doisestágios: <AmostragemDoisEstagiosForm />,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">
          Arbor: Sistema de Cálculo para Inventário Florestal
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormBase
          amostragens={amostragens}
          onSubmit={onFormSubmit}
          onAmostragemChange={handleAmostragemChange}
          formErrors={formErrors}
        >
          {forms[amostragem]}
        </FormBase>
      </Grid>
    </Grid>
  );
};

export default EnviarAmostragemTemplate;
