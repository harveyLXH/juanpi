import { View, Text } from "@tarojs/components";
import { memo } from "react";
import styles from "./index.module.scss";

const Cart = memo(function () {
  return (
    <View className={styles["cart"]}>
      <Text> Cart Page</Text>
    </View>
  );
});

export default Cart;
