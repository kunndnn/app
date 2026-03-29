import { useState } from "react";
import { Text, View, Button, Alert, Switch } from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button clicked.");
  };
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Hello world screen.</Text>
      <Button title="click me" onPress={pressMe} />
      <Switch onValueChange={toggleSwitch} value={isEnabled}/>
    </View>
  );
}
