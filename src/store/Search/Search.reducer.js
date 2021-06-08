const INITIAL_STATE = {
    service: { title: 'Google', url: 'google.com' },
    results: [],
    query: null,
    loading: false,
    error: false
}

export default function searchReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_SERVICE':
            return { ...state, service: action.payload, results: [], query: null, error: false };

        case 'UPDATE_RESULTS':
            return {...state, results: action.payload.results, query: action.payload.query, loading: false, error: false};

        case 'SET_LOADING':
            return {...state, loading: action.payload};

        case 'SET_ERROR':
            return {...state, error: true, loading: false}
        
        default:
            return state;
    }
}