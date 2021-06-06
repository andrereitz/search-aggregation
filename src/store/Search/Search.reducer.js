const INITIAL_STATE = {
    service: { title: 'Google', url: 'google.com' },
    results: [],
    query: null,
    loading: false
}

export default function searchReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_SERVICE':
            return { ...state, service: action.payload, results: [], query: null };

        case 'UPDATE_RESULTS':
            return {...state, results: action.payload.results, query: action.payload.query, loading: false};

        case 'SET_LOADING':
            return {...state, loading: action.payload};
        
        default:
            return state;
    }
}