import { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "../screens";
import { ROUTES } from "../constants";
const Stack = createNativeStackNavigator();

export default memo(SplashStack);

const SplashStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.Splash}
    >
      <Stack.Screen name={ROUTES.Splash} component={Splash} />
    </Stack.Navigator>
  );
};
