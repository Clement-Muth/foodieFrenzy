import { AppRegistry } from "react-native";

// @ts-ignore
import { name as appName } from "./app.json";
import App from "./app/pages/App";

AppRegistry.registerComponent(appName, () => App);
