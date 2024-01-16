import { Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { logout } from "../../store/slices/user.slice";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

function HomeScreen() {
  const {
    user: { data },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <Text className="text-3xl font-semibold">Hi, {data?.name}</Text>
      <Text>{data?.email}</Text>
      <TouchableOpacity
        className="bg-blue-400 w-[100] items-center p-2 rounded-md shadow-md"
        onPress={() => dispatch(logout())}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function Authenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Authenticated" component={HomeScreen} />
    </Stack.Navigator>
  );
}
