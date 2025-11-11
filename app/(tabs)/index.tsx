import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/images/ModXplorer.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App title */}
      <Text style={styles.title}>Welcome to ModXplorer</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Explore, Create, and Share Mods Easily</Text>

      {/* Button — navigates to the next page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/secondscreen")}
      >
        <Text style={styles.buttonText}>Let's Mod</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020a12ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fbf8f8ff",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4f15feff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "#e1e3e5ff",
    fontSize: 18,
    fontWeight: "600",
  },
});
