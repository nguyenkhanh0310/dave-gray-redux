import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  // name of the slice (used for action types)
  name: 'count',
  initialState,
  // actions and their corresponding reducers start here
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
})

// export increment and decrement
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// export because the store will need that
export default counterSlice.reducer;