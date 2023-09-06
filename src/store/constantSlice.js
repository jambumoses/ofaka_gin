import { createSlice } from "@reduxjs/toolkit";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    companyName: "Ofaka",
    /*     currentPageTitle: "", */
    currentPage: "",

    data: {
      products: [{ _id: 1 }, { _id: 1 }, { _id: 1 }],
    },
  },

  reducers: {
    changeCompanyName(state, actions) {
      state.companyName = actions.payload;
    },
    updateCurrentPage(state, actions) {
      state.currentPage = actions.payload;
    },
  },
});

export const constantActions = constantSlice.actions;
export default constantSlice;
