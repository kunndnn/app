import { Text, View, Button, Alert } from "react-native";

export default function Index() {
  const pressMe = () => {
    Alert.alert("Button clicked.");
  };
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Hello world screen.</Text>
      <Button title="click me" onPress={pressMe} />
    </View>
  );
}
