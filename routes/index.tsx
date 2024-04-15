import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { User } from "../types/User";
import {ScreenNames} from "../constants";

export type RootStackParamList = {
  Home: undefined;
  Details: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.Home as never}>
        <Stack.Screen name={ScreenNames.Home as never} component={Home} />
        <Stack.Screen name={ScreenNames.Details as never} component={Details} getId={({params}) => params['_id']} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes
