import { NavBar } from './components';
import Routes from './routes/Routes';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
