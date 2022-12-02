import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface TranslateState {
  word: string[];
}

// Define the initial state using that type
const initialState: TranslateState = {
    word: [],
}

export const translateSlice = createSlice({
  name: 'translate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleWords: (state, action: PayloadAction<string>) => {
      state.word.push(action.payload)
    },
  },
})

export const { handleWords } = translateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWords = (state: RootState) => state.translate

export default translateSlice.reducer