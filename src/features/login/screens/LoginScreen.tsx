import { LoginTemplate } from '../templates';

const LoginScreen = () => {
  const onSave = (values: any) => {
    console.log(values);
  };

  return <LoginTemplate onSave={onSave} />;
};

export default LoginScreen;
