import { NavigationContainer } from "@react-navigation/native";
import Nav from "./components/Nav";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
	let fontloaded = useFonts({ "branding-sf": require("./assets/fonts/branding-sf-cmp-medium-italic.ttf") });

	return !fontloaded ? (
		<AppLoading />
	) : (
		<NavigationContainer>
			<Nav />
		</NavigationContainer>
	);
}
