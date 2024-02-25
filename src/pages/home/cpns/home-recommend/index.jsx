import { memo } from "react";
import { View, Image } from "@tarojs/components";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const HomeRecommend = memo(function (props) {
  const { recommend } = props;
  if (!recommend) return;

  return (
    <View className={styles["home-recommend"]}>
      {/* 顶部 */}
      <Image
        className={styles["ad-big-top-pic"]}
        mode="widthFix"
        src={recommend.ad_big_top.pic}
      ></Image>
      {/* 中间 */}
      <View className={styles["recommend-item"]}>
        {/* 品牌清货 */}
        <Image
          className={styles["ad-left"]}
          src={recommend.ad_left.pic}
        ></Image>
        <View className={styles["ad-right"]}>
          {/* 限量快枪 */}
          <Image
            className={styles["ad-right-pic1"]}
            src={recommend.ad_right1.pic}
          ></Image>
          <Image
            className={styles["ad-right-pic2"]}
            src={recommend.ad_right2.pic}
          ></Image>
        </View>
      </View>
      {/* 底部 */}
      <Image
        className={styles["ad-big-top-pic"]}
        mode="widthFix"
        src={recommend.ad_big_bottom.pic}
      ></Image>
      <Image
        className={styles["ad-big-top-pic"]}
        mode="widthFix"
        src={recommend.choiceness.pic}
      ></Image>
    </View>
  );
});

export default HomeRecommend;
HomeRecommend.propTypes = {
  recommend: PropTypes.object,
};
