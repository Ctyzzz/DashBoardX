import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {getCookie, setCookie, removeCookie} from 'typescript-cookie';

export const fetchLogin = createAsyncThunk("auth/login", async (body) => {
  const { data } = await axios.post(`/auth/user/login`, body);
  return data;
});
export const fetchRegister = createAsyncThunk("auth/register", async (body) => {
  const { data } = await axios.post(`/auth/user/register`, body);
  return data;
});

export const fetchRefresh = createAsyncThunk("auth/refresh", async () => {
  const refresh = getCookie("refreshToken");
  const { data } = await axios.post(`/user/refresh`, { refresh });
  return data;
});

export const initialState = {
  accessToken: {
    token: null,
    status: "",
  },
  refreshToken: {
    token: null,
    status: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.accessToken.token = null;
      state.refreshToken.token = null;
      state.accessToken.status = "";
      state.refreshToken.status = "";
      removeCookie("accessToken");
      removeCookie("refreshToken");
    },
    setRefresh: (state, action) => {
      state.accessToken.token = action.payload;
    },
    setAccess: (state, action) => {
      state.refreshToken.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.accessToken.status = "loading";
        state.refreshToken.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.accessToken.token = action.payload.access_token;
        state.refreshToken.token = action.payload.refresh_token;
        setCookie("accessToken", action.payload.access_token, { expires: 1 });
        setCookie("refreshToken", action.payload.refresh_token, {
          expires: 1,
        });
        state.accessToken.status = "loaded";
        state.refreshToken.status = "loaded";
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        if (action.error.message.split(" ")[4] != "JSON\n") {
          state.accessToken.token = null;
          state.refreshToken.token = null;
          state.accessToken.status = "error";
          state.refreshToken.status = "error";
          removeCookie("accessToken");
          removeCookie("refreshToken");
        }
      })
      .addCase(fetchRegister.pending, (state) => {
        state.accessToken.status = "loading";
        state.refreshToken.status = "loading";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.accessToken.token = action.payload.access_token;
        state.refreshToken.token = action.payload.refresh_token;
        setCookie("accessToken", action.payload.access_token, { expires: 1 });
        setCookie("refreshToken", action.payload.refresh_token, {
          expires: 1,
        });
        state.accessToken.status = "loaded";
        state.refreshToken.status = "loaded";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.accessToken.status = "error";
        state.refreshToken.status = "error";
      })
      .addCase(fetchRefresh.pending, (state) => {
        state.accessToken.status = "loading";
        state.refreshToken.status = "loading";
      })
      .addCase(fetchRefresh.fulfilled, (state, action) => {
        state.accessToken.token = action.payload;
        state.refreshToken.token = action.payload;
        setCookie("accessToken", action.payload.access_token, { expires: 1 });
        setCookie("refreshToken", action.payload.refresh_token, {
          expires: 1,
        });
        state.accessToken.status = "loaded";
        state.refreshToken.status = "loaded";
      })
      .addCase(fetchRefresh.rejected, (state) => {
        state.accessToken.token = null;
        state.refreshToken.token = null;
        state.accessToken.status = "error";
        state.refreshToken.status = "error";
        removeCookie("accessToken");
        removeCookie("refreshToken");
      });
  },
});

export const { logOut, setAccess, setRefresh } = authSlice.actions;
export const authReducer = authSlice.reducer;
