import { View, Image, FlatList } from "react-native";
import { menuItem } from "../components/Item";
import { cover, home, DATA } from "../utils";

export default function Home() {
	return (
		<View style={home.container}>
			<View style={home.cover}>
				<View style={home.padding} />
				<View style={{ flex: 3 }}>
					<Image style={[home.coverImage, { marginLeft: 60 }]} source={cover}></Image>
				</View>
			</View>
			<View style={home.listContainer}>
				<FlatList<any> data={DATA} renderItem={menuItem} keyExtractor={(item) => item.id} />
			</View>
		</View>
	);
}
