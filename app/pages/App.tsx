import { SafeAreaView, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "../libraries/theme";
import { Browser } from "../routes";

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
        <SafeAreaView style={{ paddingTop: 60, backgroundColor: "white", flex: 1 }}>
          <ThemeProvider>
            <Browser />
          </ThemeProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
