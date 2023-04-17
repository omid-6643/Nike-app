import { StyleSheet, Pressable, View, FlatList, Image } from "react-native";
import products from "../data/products";
// import { useNavigation } from "@react-navigation/native";

const Products = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Products Details")}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
