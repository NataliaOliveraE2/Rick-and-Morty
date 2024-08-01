import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (limit) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    return data.results.slice(0, limit);
  }
);

export const fetchCharacterById = createAsyncThunk(
  'characters/fetchCharacterById',
  async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    return data;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    limit: 5,
    selectedCharacter: null,
    selectedCharacterStatus: 'idle',
  },
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCharacterById.pending, (state) => {
        state.selectedCharacterStatus = 'loading';
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.selectedCharacterStatus = 'succeeded';
        state.selectedCharacter = action.payload;
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.selectedCharacterStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setLimit } = charactersSlice.actions;

export default charactersSlice.reducer;