import { View, Text, Image, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Redirect } from "expo-router";
import CustomDrawerItem from "@/components/layout/CustomDrawerItem";
//stole from somewhere..
//feel free to adjust the file!!
const CustomDrawerContent = (props) => {
  const isAuth = true;

  if (!isAuth) {
    return <Redirect href={"/"} />;
  } else
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
            style={styles.userImg}
          />
          <View style={styles.userDetailsWrapper}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john@email.com</Text>
          </View>
        </View>
        <CustomDrawerItem
          FontAwesomeIconName="code"
          label="Favourites"
          pathname="/favourites"
        />
        <CustomDrawerItem
          FontAwesomeIconName="code"
          label="Setting"
          pathname="/setting"
        />
      </DrawerContentScrollView>
    );
};

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(stack)" />
    </Drawer>
  );
}
const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  userImg: {
    borderRadius: 40,
    width: 80,
    height: 80
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  userEmail: {
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "underline"
  }
});
