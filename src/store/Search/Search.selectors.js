export const selectSearchService = (state) => {
    return state.search.service;
}

export const selectSearchResults = (state) => {
    return state.search.results;
}

export const selectSearchQuery = (state) => {
    return state.search.query;
}

export const selectSearchLoading = (state) => {
    return state.search.loading;
}

export const selectSearchError = (state) => {
    return state.search.error;
}