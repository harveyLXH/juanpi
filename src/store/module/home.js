import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeInfoData,
  getRecommendData,
  getGoodsData,
} from "@/service/home";

//1. 创建异步的action
export const fetchHomeInfoDataAction = createAsyncThunk(
  "home/info",
  // eslint-disable-next-line no-unused-vars
  async (payload, { dispatch, getState }) => {
    // getState -> root state
    const res = await getHomeInfoData();
    return res.data;
  }
);

export const fetchHomeRecommendDataAction = createAsyncThunk(
  "home/recommend",
  async () => {
    const res = await getRecommendData();
    return res.data;
  }
);

export const fetchHomeGoodsDataAction = createAsyncThunk(
  "home/goods",
  async (payload) => {
    const { type, page } = payload;
    // type, // 0 -> 精选专场 1->精选单品
    // page, // 默认为1 第1页的数据
    const res = await getGoodsData(type, page);
    return {
      goods: res.data.goods,
      type,
      page,
    };
  }
);

export const tabs = ["specific", "single"];

function getDefaultGoodsList() {
  const goodsListOrigin = {};
  tabs.forEach((tab) => {
    // { "精选专场": { page:0, list:[] } }
    goodsListOrigin[tab] = { page: 0, list: [] };
  });
  return goodsListOrigin;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    populars: [],
    recommend: null, // 默认值为null
    currentTab: tabs[0], // specific  single
    goodsList: getDefaultGoodsList(),
    // goodsList: {
    //   specific: {
    //     // 精选专场
    //     page: 0,
    //     list: [],
    //   },
    //   single: {
    //     // 精选单品
    //     page: 0,
    //     list: [],
    //   },
    // },
  },
  reducers: {
    setCurrentTab(state, { payload }) {
      state.currentTab = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeInfoDataAction.fulfilled, (state, action) => {
        const { payload } = action;
        state.banners = payload.adsInfo.slide_ads.config.slide || [];
      })
      .addCase(fetchHomeRecommendDataAction.fulfilled, (state, { payload }) => {
        state.populars = payload.populars || [];
        state.recommend = payload.recommend || null;
      })
      .addCase(fetchHomeGoodsDataAction.fulfilled, (state, { payload }) => {
        // console.log(type); // home/goods/fulfilled

        const { type, page, goods } = payload;
        if (goods && goods.length) {
          state.goodsList[tabs[type]].list = [
            ...state.goodsList[tabs[type]].list, //old goods
            ...goods, // new goods
          ];
          state.goodsList[tabs[type]].page = page;
        }
      });
  },
});

export const { setCurrentTab } = homeSlice.actions
export default homeSlice.reducer;
