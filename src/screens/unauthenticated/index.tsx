import { Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppDispatch } from "../../hooks/useStore";
import { getMe } from "../../store/actions/user.action";

function LoginScreen() {
  const dispatch = useAppDispatch();

  const login = () =>
    dispatch(
      getMe({
        name: "shekhar",
        email: "shekhar@gmail.com",
      })
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Unauthenticated Page</Text>

      <TouchableOpacity
        className="bg-blue-400 w-[100] items-center p-2 rounded-md shadow-md"
        onPress={login}
      >
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function Unauthenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
