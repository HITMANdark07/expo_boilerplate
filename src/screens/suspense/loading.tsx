import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="text-2xl">Loading User...</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function Loading() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}
