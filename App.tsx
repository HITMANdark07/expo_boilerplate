import App from "./src";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./src/store";
import "react-native-reanimated";
import "react-native-gesture-handler";

export default function Main() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}
