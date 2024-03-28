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
export const StockCard = ({
  ticker,
  image,
  companyName,
  price,
  priceChange,
  priceChangePercentage,
}: {
  ticker: string;
  image: string;
  companyName: string;
  price: number;
  priceChange: number;
  priceChangePercentage: number;
}) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
      style={styles.companyDetails}
      onPress={() => router.push(`/${ticker}`)}
    >
      <Image source={image} style={styles.companyLogo} contentFit="contain" />
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
            {ticker}
          </Text>
          <Text variant="labelMedium">{companyName}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text variant="titleMedium" style={styles.textFontWeight}>
            {formatCurrency(price)}
          </Text>
          <Text
            variant="labelMedium"
            style={{
              color:
                priceChange < 0
                  ? "red"
                  : priceChange > 0
                  ? "lighgreen"
                  : "auto",
            }}
          >
            {formatCurrency(priceChange)}
            {"  "}
            {priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
