import {Navigation} from 'components';
import {ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyles from './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Navigation items={[
          {content: 'homepage', to:'/'},
          {content: 'budgetpage', to:'/budget' }
        ]}/>
        <Switch>
          <Route  exact path='/'>home page</Route>
          <Route path='/budget'>budget page</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
