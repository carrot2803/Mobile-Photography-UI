import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { camera, welcome } from "../utils";

export default function Welcome() {
	const nav = useNavigation();
	return (
		<View style={welcome.container}>
			<View style={welcome.imgCont}>
				<Image source={camera} />
				<Text style={[welcome.txtStyle, { fontSize: 50, marginTop: 30, opacity: 0.9 }]}>
					Capture every precious moment with us
				</Text>
			</View>
			<View style={welcome.btnCont}>
				<TouchableOpacity onPress={() => nav.navigate("home" as never)}>
					<View style={[welcome.ball, welcome.ballpos]}></View>
					<Text style={[welcome.txtStyle, { fontSize: 30 }]}>Get Started</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
