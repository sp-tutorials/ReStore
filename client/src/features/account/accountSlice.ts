import { FieldValues } from "react-hook-form";
import { User } from "../../app/models/user.ts";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../../app/api/agent.ts";

interface AccountState {
  user: User | null;
}

const initialState: AccountState = {
  user: null
}

export const signInUser = createAsyncThunk<User, FieldValues>(
  'account/signInUser',
  async (data, thunkApi) => {
    try {
      const user = await agent.Account.login(data);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (e: any) {
      return thunkApi.rejectWithValue({error: e.data})
    }
  }
)

export const fetchCurrentUser = createAsyncThunk<User>(
  'account/signInUser',
  async (_, thunkApi) => {
    try {
      const user = await agent.Account.currentUser();
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (e: any) {
      return thunkApi.rejectWithValue({error: e.data})
    }
  }
)

export const accountSlice = createSlice(({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
      state.user = action.payload;
    });
    builder.addMatcher(isAnyOf(signInUser.rejected, fetchCurrentUser.rejected), (_, action) => {
      console.log(action.payload);
    })
  })
}))