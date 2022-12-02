import { LanguageType } from './../../types/Language';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface AddLanguageState {
  language: LanguageType[];
  isNative: LanguageType;
}

// Define the initial state using that type
const initialState: AddLanguageState = {
    language: [],
    isNative: { name: '', nativeLanguage: false},
}

export const addLanguageSlice = createSlice({
  name: 'addLanguage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.language.push(action.payload)
    },
    handleNativeLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.isNative.name = action.payload.name;
      state.isNative.nativeLanguage = action.payload.nativeLanguage;
    }
  },
})

export const { handleLanguage, handleNativeLanguage } = addLanguageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.addLanguage
export const selectNativeLanguage = (state: RootState) => state.addLanguage

export default addLanguageSlice.reducer