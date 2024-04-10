import { useLocalSearchParams, router } from "expo-router";
import { View, SafeAreaView, Pressable, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { selectStocks,selectStocksPrices } from "@/utils/searchStocks";
import { Image } from "expo-image";

export default function TickerScreen() {
  const { ticker } = useLocalSearchParams();
  const stock = selectStocks(ticker as string);
  const stockPrices = selectStocksPrices(ticker as string);
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20, marginBottom:10}} >
      <View style={{flexDirection: "row", paddingVertical: 25, marginBottom:10, justifyContent:'space-between'}}>
        <Pressable onPress={() => router.back()}>
        <MaterialCommunityIcons  name="chevron-left" color={"white"} size={40} />
        </Pressable>
        <Pressable>
        <MaterialCommunityIcons  name="star-outline" color={"white"} size={40} />
        </Pressable>
      </View>
      { stock ? <FlatList data={[1]}
      renderItem={() => <View>
        <View>
          <Image source={stock?.image} style={{height: 50, width: 50}} contentFit="contain" />
          <Text>{stock.ticker}</Text>
          <Text>{stock.companyName}</Text>
        </View>
      </View>}/> : <Text>Stock Not Avaialable</Text>}
    </SafeAreaView>
  );
}

