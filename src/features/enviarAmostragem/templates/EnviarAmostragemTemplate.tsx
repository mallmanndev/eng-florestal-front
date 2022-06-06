import { Button, Grid, Typography } from '@mui/material';
import { Form } from '@unform/web';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { TextField } from '../../../components/unform';
import Select from '../../../components/unform/Select';
import SelecionaAmostragemButton from '../components/SelecionaAmostragemButton';
import { TAmostragemTab } from '../types/tabs';
//import { AmostragemEstratificadaForm } from './forms';
import FormBase from './forms/FormBase';
import AmostragemSimplesForm from './forms/Simples';
import AmostragemEstratificadaForm from './forms/Estratificada';
import AmostragemIndependenteForm from './forms/Independente';
import AmostragemSistematicaComMultiplosIniciosAleatoriosForm from './forms/SistematicaComMultiplosIniciosAleatorios';
import AmostragemSistematica from './forms/Sistematica'
import AmostragemConglomeradosForm from './forms/Conglomerados';
import AmostragemDoisEstagiosForm from './forms/DoisEstagios';

type TFormData = {
  title: string;
};

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
  const formRef = useRef<any>(null);
  const [amostragem, setAmostragem] = useState<string>('');

  useEffect(() => {
    if (formRef.current) {
      formRef.current.setErrors(formErrors);
    }
  }, [formErrors]);

  const handleAmostragemChange = (value: string) => {
    setAmostragem(value);
  };

  const forms: { [key: string]: ReactNode } = {
    simples: <AmostragemSimplesForm />,
    estratificada: <AmostragemEstratificadaForm />,
    independente: <AmostragemIndependenteForm />,
    sistemáticacommúltiplosiníciosaleatórios: <AmostragemSistematicaComMultiplosIniciosAleatoriosForm />,
    sistemática: <AmostragemSistematica />,
    conglomerados: <AmostragemConglomeradosForm />,
    doisestágios: <AmostragemDoisEstagiosForm />,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">iFlorestal</Typography>
      </Grid>

      <Grid item xs={12}>
        <FormBase
          amostragens={amostragens}
          onSubmit={(data) => {
            console.log(data);
          }}
          onAmostragemChange={handleAmostragemChange}
        >
          {forms[amostragem]}
        </FormBase>
      </Grid>
    </Grid>
  );
};

export default EnviarAmostragemTemplate;
