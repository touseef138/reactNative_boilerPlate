import { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
import { ROUTES } from "../constants";
const Stack = createNativeStackNavigator();

export default memo(HomeStack);

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.Home}
    >
      <Stack.Screen name={ROUTES.Home} component={Home} />
    </Stack.Navigator>
  );
} 
