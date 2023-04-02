import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Products from "./src/screens/Products";
import ProductDetails from "./src/screens/ProductDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Products /> */}
      <ProductDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
