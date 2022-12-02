import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store';

// Define a type for the slice state
interface AddLanguageState {
  language: string[]
}

// Define the initial state using that type
const initialState: AddLanguageState = {
    language: [],
}

export const addLanguageSlice = createSlice({
  name: 'addLanguage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleLanguage: (state, action: PayloadAction<string>) => {
      console.log(action)
      state.language.push(action.payload)
    }
  },
})

export const { handleLanguage } = addLanguageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.addLanguage

export default addLanguageSlice.reducer