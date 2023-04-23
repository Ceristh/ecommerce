import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import renderRoutes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {renderRoutes}
      </Router>
    </Provider>
  );
}

export default App;
