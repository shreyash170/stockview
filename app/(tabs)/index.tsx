import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import { stocks } from "@/data";
import { Image } from "expo-image";
import { formatCurrency } from "@/utils/formatCurrenecy";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.homeContainer}>
      <Text variant="titleLarge" style={styles.titleText}>
        Available Stocks
      </Text>
      <FlatList
        keyExtractor={(item) => item.ticker}
        data={stocks}
        renderItem={({ item }) => (
          <Pressable
            style={styles.companyDetails}
            onPress={() => router.push(`/${item.ticker}`)}
          >
            <Image
              source={item.image}
              style={styles.companyLogo}
              contentFit="contain"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: width - 75,
                paddingLeft: 15,
              }}
            >
              <View>
                <Text variant="titleMedium" style={styles.textFontWeight}>
                  {item.ticker}
                </Text>
                <Text variant="labelMedium">{item.companyName}</Text>
              </View>
              <View style={{alignItems:"flex-end"}}>
                <Text variant="titleMedium" style={styles.textFontWeight}>
                  {formatCurrency(item.price)}
                </Text>
                <Text
                  variant="labelMedium"
                  style={{
                    color:
                      item.priceChange < 0
                        ? "red"
                        : item.priceChange > 0
                        ? "lighgreen"
                        : "auto",
                  }}
                >
                  {formatCurrency(item.priceChange)}{"  "}
                  {item.priceChangePercentage.toFixed(2)}%
                </Text>
              </View>
            </View>
          </Pressable>
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
  companyLogo: {
    height: 50,
    width: 50,
  },
  companyDetails: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 60,
  },
  textFontWeight: {
    fontWeight: "bold",
  },
});
