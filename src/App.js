import './App.scss';

import store from './store/store';
import { Provider as ReduxProvider } from 'react-redux';

import { SearchBar, SearchResults } from './components';

function App() {
  return (
    <ReduxProvider store={store}>
      <SearchBar height='35px' />
      <SearchResults />
    </ReduxProvider>
  );
}

export default App;
