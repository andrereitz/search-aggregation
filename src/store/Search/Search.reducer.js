const INITIAL_STATE = {
    service: { title: 'Google', url: 'google.com' },
    results: [],
    query: null
}

export default function searchReducer(state = INITIAL_STATE, action){
    console.log(action);

    switch(action.type){
        case 'CHANGE_SERVICE':
            return { ...state, service: action.payload, results: [], query: null };

        case 'UPDATE_RESULTS':
            return {...state, results: action.payload.results, query: action.payload.query};
        
        default:
            return state;
    }
}