import { useState } from 'react';
import * as Yup from 'yup';
import { TAmostragemTab } from '../types/tabs';

type TUseEnviarAmostragemScreen = {
  formErrors: { [key: string]: string };
  amostragens: TAmostragemTab[];
  onAmostragemChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (data: any) => void;
};

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O nome é obrigatório')
    .min(3, 'O nome deve ter no mínimo 3 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  responsavel: Yup.string().required('O responsável é obrigatório'),
});

const useEnviarAmostragemScreen = (): TUseEnviarAmostragemScreen => {
  const [amostragemFile, setAmostragemFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<any>({});

  const onAmostragemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAmostragemFile(event.target.files[0]);
    }
  };

  const onFormSubmit = async (data: any) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors: { [key: string]: string } = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error?.path && error?.message) {
            validationErrors[error.path] = error.message;
          }
        });
        setFormErrors(validationErrors);
      }
    }
  };

  const amostragens: TAmostragemTab[] = [
    { label: 'Simples' },
    { label: 'Estratificada' },
    { label: 'Sistemática' },
    { label: 'Dois Estágios' },
    { label: 'Conglomerados' },
    { label: 'Sistemática com Múltiplos Inícios Aleatórios' },
    { label: 'Independente' },
    { label: 'Dupla' },
    { label: 'Total' },
    { label: 'Parcial' },
  ];

  return {
    formErrors,
    amostragens,
    onAmostragemChange,
    onFormSubmit,
  };
};

export default useEnviarAmostragemScreen;
