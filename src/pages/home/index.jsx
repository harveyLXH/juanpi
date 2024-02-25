import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { View } from "@tarojs/components";
import { useLoad, useReachBottom } from "@tarojs/taro";
// import { getHomeInfoData } from "@/service/home";
import {
  fetchHomeInfoDataAction,
  fetchHomeRecommendDataAction,
  fetchHomeGoodsDataAction,
  setCurrentTab,
  tabs,
} from "@/store/module/home";
import GridView from "@/components/grid-view";
import TabControl from "@/components/tab-control";
import HomeSearch from "./cpns/home-search";
import HomeBanner from "./cpns/home-banner";
import HomePopular from "./cpns/home-popular";
import HomeRecommend from "./cpns/home-recommend";

import styles from "./index.module.scss";

const Home = memo(function () {
  const dispath = useDispatch();

  const { banners, populars, recommend, currentTab, goodsList } = useSelector(
    (state) => {
      // state -> root state
      // home state -> state.home
      return {
        banners: state.home.banners,
        populars: state.home.populars,
        recommend: state.home.recommend,
        currentTab: state.home.currentTab,
        goodsList: state.home.goodsList,
      };
    },
    shallowEqual
  );

  // 页面的生命周期
  useLoad(() => {
    // getHomeInfoData().then((res) => {
    //   // 将整个数据存储到redux store
    //   console.log("res", res.data.adsInfo.slide_ads.config.slide);
    // });

    // 发起一个异步的action
    dispath(fetchHomeInfoDataAction());
    dispath(fetchHomeRecommendDataAction());
    // type, // 0 -> 精选专场 1->精选单品
    // page, // 默认为1 第1页的数据
    dispath(fetchHomeGoodsDataAction({ type: 0, page: 1 }));
    dispath(fetchHomeGoodsDataAction({ type: 1, page: 1 }));
  });

  useReachBottom(() => {
    // 获取当前商品类型的下一页
    const nextPage = goodsList[currentTab].page + 1;
    const currentType = tabs[0] === currentTab ? 0 : 1;
    dispath(fetchHomeGoodsDataAction({ type: currentType, page: nextPage }));
  });

  const handleTabItemClick = (index) => {
    // console.log("handleTabItemClick ----", index, tabs[index]); // 0 1
    dispath(setCurrentTab(tabs[index]));
  };

  return (
    <View className={styles["home"]}>
      <HomeSearch></HomeSearch>
      <HomeBanner banners={banners}></HomeBanner>
      <HomePopular populars={populars}></HomePopular>
      <HomeRecommend recommend={recommend}></HomeRecommend>
      <TabControl
        titles={["精选专场", "精选单品"]}
        onTabClick={handleTabItemClick}
      ></TabControl>
      <GridView goods={goodsList[currentTab].list}></GridView>
    </View>
  );
});

export default Home;
