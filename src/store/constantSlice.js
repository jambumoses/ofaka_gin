import { createSlice } from "@reduxjs/toolkit";
/* models */
import productsModel from "../assets/models/products";
import merchantModel from "../assets/models/merchant";
import bannersModel from "../assets/models/banners";
import sponsorsModel from "../assets/models/sponsors";

const constantSlice = createSlice({
  name: "constant",
  initialState: {
    companyName: "Ofaka",
    /*     currentPageTitle: "", */
    currentPage: "",

    data: {
      cart: {},
      details: {},
      merchantInfo: merchantModel,
      banners: bannersModel,
      sponsors: sponsorsModel,
      products: productsModel,
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
