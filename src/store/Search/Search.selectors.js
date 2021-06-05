export const selectSearchService = (state) => {
    return state.search.service;
}

export const selectSearchResults = (state) => {
    return state.search.results;
}

export const selectSearchQuery = (state) => {
    return state.search.query;
}
