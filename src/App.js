import React from 'react';
import Providers from './components/Providers';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';

import Main from './components/Main';

function App() {
  return (
    <Providers>
      <GlobalStyles>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </GlobalStyles>
    </Providers>
  );
}

export default App;
