import { BingMock, GoogleMock }  from '../../mocks';
import { updateResults } from './Search.actions';

const USE_MOCK = false;

export const fetchResults = (query) => async (dispatch, getState) => {
    const service = getState().search.service;
    const serviceUrl = getState().search.service.url;

    const payload = {
        query: (USE_MOCK ? 'test' : query),
        results: []
    }

    const headers = { method: 'GET', headers: { "Accept": "application/json", "Content-Type": "application/json" } };

    if(typeof serviceUrl === 'object'){
        if(USE_MOCK){
            payload.results = await __getMock(service);
        }else{
            await Promise.all([
                fetch(__contructURL(service.url[0], query), headers),
                fetch(__contructURL(service.url[1], query), headers)
            ])
                .then(async ([res1, res2]) => {
                    const search1 = await res1.json();
                    const search2 = await res2.json();

                    if(search1.status === 'success' && search2.status === 'success'){
                        payload.results = __processResponse(search1).concat(__processResponse(search2));
                    }

                    dispatch(updateResults(payload));
    
                })
                .catch(err => console.log(err))
        }

    }else{
        if(USE_MOCK){
            payload.results = await __getMock(service);
        }else{
            payload.results = await fetch(__contructURL(service.url, query), headers)
                .then(res => res.json())
                .then(res => {
                    if(res.status === 'success'){
                        payload.results = __processResponse(res);

                        dispatch(updateResults(payload));
                    }
                })
                .catch(err => console.log(err))
        }
    }

    if(USE_MOCK){
        dispatch(updateResults(payload));
    }

}

async function __getMock(service){
    return new Promise(resolve => {
        setTimeout(() => {
            let mock;
            switch(service.title){
                case 'Google':
                    mock = __processResponse(GoogleMock);
                    break;
                case 'Bing':
                    mock = __processResponse(BingMock);
                    break;
                default:
                    mock = __processResponse(GoogleMock).concat(__processResponse(BingMock)).sort((a, b) => a.position - b.position);
            }

            resolve(mock);
        }, 3000);
    })
}

function __processResponse(data){
    const result = data.results.results.organic.slice(0, 10);

    return result;
}

function __contructURL(serviceUrl, query){
    const url = new URL("https://api.serphouse.com/serp/live");

    const SEARCH_PARAMS = {
        "q": query,
        "domain": serviceUrl,
        "lang": (serviceUrl === 'google.com' ? "en" : "en-US"),
        "device": "desktop",
        "serp_type": "web",
        "loc": "Alba,Texas,United States",
        "verbatim": "0",
        "page": "1",
        "api_token": process.env.REACT_APP_SERPHOUSE_API_KEY,
    }

    Object.keys(SEARCH_PARAMS).forEach(key => url.searchParams.append(key, SEARCH_PARAMS[key]));

    return url;
}