import { createSlice } from "@reduxjs/toolkit";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    companyTitle: "GentlePeople",
    currentPageTitle: "",
    currentPage: "",

    data: {
      products: {},
    },
  },

  reducers: {},
});

export const constantActions = constantSlice.actions;
export default constantSlice;
