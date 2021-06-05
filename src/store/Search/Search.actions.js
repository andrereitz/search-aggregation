export function changeSearch(service){
    return{
        type: 'CHANGE_SERVICE',
        payload: service
    }
}

export function updateResults(results){
    return{
        type: 'UPDATE_RESULTS',
        payload: results
    }
}