import { FieldValues } from "react-hook-form";
import { User } from "../../app/models/user.ts";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../../app/api/agent.ts";
import { router } from "../../app/router/Routes.tsx";
import { toast } from "react-toastify";
import { setBasket } from "../basket/basketSlice.ts";

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
      const userDto = await agent.Account.login(data);
      const {basket, ...user} = userDto;
      if (basket) thunkApi.dispatch(setBasket(basket));
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (e: any) {
      return thunkApi.rejectWithValue({error: e.data})
    }
  }
)

export const fetchCurrentUser = createAsyncThunk<User>(
  'account/fetchCurrentUser',
  async (_, thunkApi) => {
    thunkApi.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)))
    try {
      const userDto = await agent.Account.currentUser();
      const {basket, ...user} = userDto;
      if (basket) thunkApi.dispatch(setBasket(basket));
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (e: any) {
      return thunkApi.rejectWithValue({error: e.data})
    }
  },
  {
    condition: () => {
      if (!localStorage.getItem('user')) return false;
    }
  }
)

export const accountSlice = createSlice(({
  name: 'account',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      router.navigate('/');
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder => {
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.error('Session expired - please login agan');
      router.navigate('/');
    })
    builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
      state.user = action.payload;
    });
    builder.addMatcher(isAnyOf(signInUser.rejected), (_, action) => {
      throw action.payload;
    })
  })
}))

export const {signOut, setUser} = accountSlice.actions;