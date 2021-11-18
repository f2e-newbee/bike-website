import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    loading: false,
    apiCount: 0,
    hasError: false,
    errorMsg: "",
  },
  reducers: {
    startFetch: (state, action) => {
      if (!state.loading) {
        state.loading = true;
      }
      state.apiCount++;
      return state;
    },
    endFetch: (state, action) => {
      state.apiCount--;
      if (state.apiCount === 0) {
        state.loading = false;
      }

      return state;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.apiCount = 0;
      if (payload) {
        state.hasError = true;
        state.errorMsg = payload;
      }
      return state
     
    },
  },
});

const { actions, reducer } = fetchSlice;

// Extract and export each action creator by name
export const { startFetch, endFetch, setError } = actions;
// export const selectLoading = (state) => state.fetch.loading;
export const selectFetch = (state) => state.fetch;
export default reducer;