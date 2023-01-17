import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}
      >
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    //  flex: 0.2,
    padding: 20,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
  },
});
