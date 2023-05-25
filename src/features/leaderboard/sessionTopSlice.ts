import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ISessionTopState {
  accuracy: number;
  errors: number;
  totalTyped: number;
  summaryCount: number;
}

export interface SessionTopState {
  value: ISessionTopState;
}

const initialState: SessionTopState = {
  value: { accuracy: 0, errors: 0, totalTyped: 0, summaryCount: 0 },
};

export const counterSlice = createSlice({
  name: 'sessionTop',
  initialState,
  reducers: {
    setNewRecord: (state, action: PayloadAction<ISessionTopState>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewRecord } = counterSlice.actions;

export default counterSlice.reducer;
