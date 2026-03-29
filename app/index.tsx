import { useState } from "react";
import { Text, View, Button, Alert, Switch, ScrollView } from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button clicked.");
  };
  return (
    <ScrollView>
      {[...Array(60)].map((_, i) => (
        <Text key={i} style={{ fontSize: 24 }}>
          Hello world screen. {i + 1}
        </Text>
      ))}
      {/* <Button title="click me" onPress={pressMe} />
      <Switch onValueChange={toggleSwitch} value={isEnabled}/> */}
    </ScrollView>
  );
}
