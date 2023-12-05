
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
import { ROUTES } from "../constants";
const Stack = createNativeStackNavigator();

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
};
