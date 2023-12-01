import React from "react";
import { createStackNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import PostScreen from "../screens/PostScreen";
const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tela Inicial" component={TabNavigator} />
            <Stack.Screen name="Tela de Posts" component={PostScreen} />
        </Stack.Navigator>
    );
};
export default StackNavigator;