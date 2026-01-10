import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
        activeTab: 'photos',
        loading: false,
        error: null,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setResults(state, action) {
            state.results = action.payload;
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload;
            state.loading = false;
        },
        setLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        clearResults(state){
            state.results = [];
        }
    }
});

export const { setQuery, setResults, setActiveTab, setLoading, setError } = searchSlice.actions

export default searchSlice.reducer