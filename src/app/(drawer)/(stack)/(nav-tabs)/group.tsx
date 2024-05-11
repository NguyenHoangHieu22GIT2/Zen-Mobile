import GroupDiscovery from "@/components/group/tabs/GroupDiscovery";
import YourGroups from "@/components/group/tabs/YourGroups";
import { COLORS } from "@/constants";
import { useMemo, useState } from "react";
import { View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

export default function group() {
  const renderScene = useMemo(
    () =>
      SceneMap({
        discovery: () => <GroupDiscovery />,
        yourGroups: () => <YourGroups />
      }),
    []
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "discovery", title: "Discover" },
    { key: "yourGroups", title: "Your Groups" }
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={COLORS.primary}
      indicatorStyle={{
        backgroundColor: COLORS.primary
      }}
      labelStyle={{
        color: "#a8abc8",
        fontWeight: "bold",
        textTransform: "capitalize"
      }}
      style={{ backgroundColor: "white" }}
    />
  );
  return (
    <View className="h-full w-full bg-white">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
