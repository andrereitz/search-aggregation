import './App.scss';

import store from './store/store';
import { Provider as ReduxProvider } from 'react-redux';

import { SearchBar, SearchResults } from './components';

function App() {
  console.log('env test', process.env.REACT_APP_SERPSTACK_API_KEY);
  console.log('env test', process.env.REACT_APP_SERPHOUSE_API_KEY);
  console.log(process.env.NODE_ENV);

  const SEARCH_PARAMS = {
    "q": "test",
    "domain": "google.com",
    "lang": "en",
    "device": "desktop",
    "serp_type": "web",
    "loc": "Alba,Texas,United States",
    "verbatim": "0",
    "page": "1",
    "api_token": process.env.REACT_APP_SERPHOUSE_API_KEY,
  }
  function testCall(){
    const url = new URL("https://api.serphouse.com/serp/live");

    let params = {
            "q": "test",
            "domain": "google.com",
            "lang": "en",
            "device": "desktop",
            "serp_type": "web",
            "loc": "Alba,Texas,United States",
            "verbatim": "0",
            "page": "1",
            "api_token": process.env.REACT_APP_SERPHOUSE_API_KEY,
        };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    console.log('api key', process.env.REACT_APP_SERPHOUSE_API_KEY)

    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }

    console.log(url.href);

    fetch(url, {
      method: 'GET',
      headers: headers
    })
        .then(response => response.json())
        .then(json => {
          console.log('json api', json)
        });

  }

  return (
    <ReduxProvider store={store}>
      <SearchBar height='35px' />
      <SearchResults />
    </ReduxProvider>
  );
}

export default App;
