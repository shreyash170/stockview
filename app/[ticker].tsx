import { useLocalSearchParams } from "expo-router";
import { View, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TickerScreen() {
  const { ticker } = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20, marginBottom:10}} >
      <View>
        <MaterialCommunityIcons  name="chevron-left" color={"white"} size={40} />
        <MaterialCommunityIcons  name="star-outline" color={"white"} size={40} />
      </View>
      <Text>{ticker}</Text>
    </SafeAreaView>
  );
}

