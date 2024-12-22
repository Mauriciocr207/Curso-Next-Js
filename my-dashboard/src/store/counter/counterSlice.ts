import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
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
