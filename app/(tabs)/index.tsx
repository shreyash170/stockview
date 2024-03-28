import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { stocks } from "@/data";
import { StockCard } from "@/components/StockCard";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text variant="titleLarge" style={styles.titleText}>
        Available Stocks
      </Text>
      <FlatList
        keyExtractor={(item) => item.ticker}
        data={stocks}
        renderItem={({ item }) => (
          <StockCard
            companyName={item.companyName}
            image={item.image}
            price={item.price}
            priceChange={item.priceChange}
            priceChangePercentage={item.priceChangePercentage}
            ticker={item.ticker}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 30,
  },
  titleText: {
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 5,
  },
});
