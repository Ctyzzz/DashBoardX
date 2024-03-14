import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { getCookie } from 'typescript-cookie';

export const fetchMe = createAsyncThunk("profile/me", async () => {
  const token = getCookie("accessToken");
  const { data } = await axios.get(`/auth/user/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
});

export const fetchUpdateMe = createAsyncThunk(
  "profile/updateMe",
  async (newUserData, { getState }) => {
    const id = getState().profileReducer.me.data.id;
    const token = getCookie("accessToken");
    const { data } = await axios.patch(`/auth/user/me`, newUserData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
);

export const initialState = {
  me: {
    data: {},
    status: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.me.status = "loading";
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.me.data = action.payload;
        state.me.status = "loaded";
      })
      .addCase(fetchMe.rejected, (state) => {
        state.me.status = "error";
      })
      .addCase(fetchUpdateMe.pending, (state) => {
        state.me.status = "loading";
      })
      .addCase(fetchUpdateMe.fulfilled, (state, action) => {
        state.me.data = action.payload;
        state.me.status = "loaded";
      })
      .addCase(fetchUpdateMe.rejected, (state) => {
        state.me.status = "error";
      });
  },
});
export const profileReducer = profileSlice.reducer;
export const {} = profileSlice.actions;
