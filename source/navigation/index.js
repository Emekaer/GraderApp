import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import HomeScreen from "../screens/HomeScreen";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOps = {
  headerStyle: {
    backgroundColor: "green",
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    color: "white",
    marginTop: 20,
  },
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOps}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={(navData) => {
          return {
            headerTitle: "Grader",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Menu"
                  iconName={"ios-menu"}
                  onPress={() => {
                    navData.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      
    </Stack.Navigator>
  );
};


const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: "grey", width: "40%" }}
      drawerContentOptions={{
        activeBackgroundColor: "black",
        activeTintColor: "white",
        marginTop: 30,
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;