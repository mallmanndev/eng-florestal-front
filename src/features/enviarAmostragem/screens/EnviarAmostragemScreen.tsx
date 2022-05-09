import { Container } from '@mui/material';
import { useEnviarAmostragemScreen } from '../hooks';

import { EnviarAmostragemTemplate } from '../templates';

const EnviarAmostragemScreen = () => {
  const { formErrors, onAmostragemChange, onFormSubmit } =
    useEnviarAmostragemScreen();

  return (
    <Container maxWidth="xl">
      <EnviarAmostragemTemplate
        formErrors={formErrors}
        onAmostragemChange={onAmostragemChange}
        onFormSubmit={onFormSubmit}
      />
    </Container>
  );
};

export default EnviarAmostragemScreen;
