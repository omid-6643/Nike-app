import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { selectedProduct } = useSelector((store) => store.products);
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("add to cart");
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={selectedProduct.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{selectedProduct.name}</Text>
          <Text style={styles.price}>$ {selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.textButton}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: { fontSize: 34, fontWeight: "500", marginVertical: 10 },
  price: { fontWeight: "500", fontSize: 16, letterSpacing: 1.5 },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
