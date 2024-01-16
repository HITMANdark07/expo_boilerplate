import { NavigationContainer } from "@react-navigation/native";
import Authenticated from "./screens/authenticated";
import Unauthenticated from "./screens/unauthenticated";
import { useAppDispatch, useAppSelector } from "./hooks/useStore";
import { useEffect } from "react";
import { getMe } from "./store/actions/user.action";
import Loading from "./screens/suspense/loading";

export default function App() {
  const {
    user: { data, isLoading },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getMe({
        name: "Test User",
        email: "test@test.com",
      })
    );
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : data ? <Authenticated /> : <Unauthenticated />}
    </NavigationContainer>
  );
}
