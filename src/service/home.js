import hyRequest from "./index.js";

// 1. 拿到首页banner的数据
export function getHomeInfoData() {
  return hyRequest.get("/homeinfo", {});
}

// 2. 拿到首页popular 和 recommend 的数据
export function getRecommendData() {
  return hyRequest.get("/recommend", {});
}

// 3. 拿到商品的列表数据
export const getGoodsData = (type, page) => {
  return hyRequest.post("/goods", {
    type, // 0 -> 精选专场 1->精选单品
    page, // 默认为1 第1页的数据
  });
};
