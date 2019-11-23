import React from 'react';
import Providers from './components/Providers';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';

import Layout from './components/Layout';

import About from './components/pages/About';

function App() {
  return (
    <Providers>
      <GlobalStyles>
        <Layout>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
          </Switch>
        </Layout>
      </GlobalStyles>
    </Providers>
  );
}

export default App;
