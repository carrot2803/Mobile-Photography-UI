import { StyleSheet } from "react-native";

export const welcome = StyleSheet.create({
	txtStyle: { fontFamily: "branding-sf", letterSpacing: 2, color: "white", textAlign: "center" },
	ball: { backgroundColor: "#FFD44A", borderRadius: 50, height: 50, width: 50 },
	ballpos: { position: "absolute", left: 100, top: -10 },
	container: { flex: 1, backgroundColor: "#57A2AF" },
	imgCont: { flex: 8, marginTop: -150, justifyContent: "center", alignItems: "center" },
	btnCont: { flex: 1 },
});

export const home = StyleSheet.create({
	container: { flex: 1, backgroundColor: "white" },
	padding: { flex: 1, justifyContent: "center", alignItems: "center" },
	coverImage: { marginTop: 25 },
	textstyle: { fontFamily: "branding-sf", letterSpacing: 2, textAlign: "center", opacity: 0.7 },
	cover: { backgroundColor: "#E9F8FF", justifyContent: "space-between", flex: 1, borderRadius: 20, margin: 10 },
	listContainer: { flex: 1, margin: 10 },
});
