import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PublicLayout } from '@standalone/shared/components';
import store from '@standalone/shared/store';
import { HomePage, GamePage } from '../pages';

import './app.css';

export function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":provider/:id" element={<GamePage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
