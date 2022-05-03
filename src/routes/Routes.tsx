import { BrowserRouter, Routes as RDRoutes, Route } from 'react-router-dom';

import { EnviarAmostragemScreen } from '../features/enviarAmostragem/screens';
import { LoginScreen } from '../features/login/screens';

const Routes = () => {
  return (
    <BrowserRouter>
      <RDRoutes>
        <Route path="/" element={<EnviarAmostragemScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </RDRoutes>
    </BrowserRouter>
  );
};

export default Routes;
