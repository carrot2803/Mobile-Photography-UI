import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function Nav() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="welcome" component={Welcome} />
			<Stack.Screen name="home" component={Home} />
		</Stack.Navigator>
	);
}
