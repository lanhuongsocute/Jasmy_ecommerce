import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AppURL from "../api/AppURL";

//lay thong tin cac items trong gio hang theo user
export const getCartItems = createAsyncThunk(
  "getCartItems",
  async (args, { rejectWithValue }) => {
    //token options bao gom token dc lay tu localstorage len
    const token = localStorage.getItem("token");
    const response = await fetch(AppURL.UserData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    // console.log(tokenoptions);
    try {
      const json = await response.json();
      console.log(json);
      return { user: json };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//get cart counts
export const getCartCount = createAsyncThunk(
  "getCartCount",
  async (args, { rejectWithValue }) => {
    //token options bao gom token dc lay tu localstorage len
    const response = await fetch(AppURL.CartCount(1), {});
    // console.log(tokenoptions);
    try {
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//day thong tin cart len server - khi nhan vao nut Order
export const addToCart = createAsyncThunk(
  "addToCart",
  async (data, { rejectWithValue }) => {
    const response = await fetch(AppURL.addToCart, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    try {
      const json = await response.json();
      console.log(json);
      // localStorage.setItem("token", json.token);
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cartSlice", //ten nay lam prefix cho action
  initialState: {
    items: [], //cart items lien quan user
    message: "", //thong bao khi post chang han
    loading: false,
    error: "",
    count: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartCount.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload;
      })
      .addCase(getCartCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
// export const { searchUser } = userSlice.actions;
