import { View, Image, Text, StyleSheet } from "react-native";

type itemProps = { id: number; name: string; bgColor: string; img: any };

export const menuItem = ({ item }: { item: itemProps }) => {
	return (
		<View style={[mi.container, { backgroundColor: item.bgColor }]}>
			<Image style={{ marginLeft: 20 }} source={item.img}></Image>
			<Text style={[mi.textstyle, { fontSize: 30, marginLeft: 20 }]}>{item.name}</Text>
		</View>
	);
};

const mi = StyleSheet.create({
	container: { flexDirection: "row", alignItems: "center", marginBottom: 15, borderRadius: 10, padding: 10 },
	textstyle: { fontFamily: "branding-sf", letterSpacing: 2, textAlign: "center", opacity: 0.7 },
});
