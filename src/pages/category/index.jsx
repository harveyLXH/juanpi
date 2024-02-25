import { View, Text } from "@tarojs/components";
import { memo } from "react";
import styles from "./index.module.scss";

const Category = memo(function () {
  return (
    <View className={styles["category"]}>
      <Text> Category Page</Text>
    </View>
  );
});

export default Category;
