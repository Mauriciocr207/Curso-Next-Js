import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isLoading: boolean;
}

const initialState: CounterState = {
  count: 5,
  isLoading: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialCounterState(state, action: PayloadAction<number>) {
      if (!state.isLoading) return;
      state.count = action.payload;
      state.isLoading = false;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    set: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0) {
        state.count = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, set, initialCounterState } = counterSlice.actions;

export default counterSlice.reducer;
