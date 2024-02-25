import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const HomeBanner = memo(function (props) {
  const { banners } = props;
  return (
    <Swiper
      className={styles["home-banner"]}
      indicatorDots
      indicatorColor="#999"
      indicatorActiveColor="#ff464e"
      autoplay
      interval={3000}
    >
      {banners.map((item) => {
        <SwiperItem key={item.id}>
          <Image
            className={styles["banner-img"]}
            src={item.pic}
            mode="widthFix"
          ></Image>
        </SwiperItem>;
      })}
    </Swiper>
  );
});

export default HomeBanner;

HomeBanner.propTypes = {
  banners: PropTypes.array,
};
