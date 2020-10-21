import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Dashboard = React.lazy(() => import('../../pages/dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <React.Suspense fallback="Loading...">
            <Switch>
              <Route path="/" component={Dashboard} />
            </Switch>
          </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
