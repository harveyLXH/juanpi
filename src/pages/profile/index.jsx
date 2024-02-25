import { View, Text } from "@tarojs/components";
import { memo } from "react";

import styles from "./index.module.scss";

const Profile = memo(function () {
  return (
    <View className={styles["profile"]}>
      <Text> Profile Page</Text>
    </View>
  );
});

export default Profile;
