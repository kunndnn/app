import { useState } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  Switch,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button clicked.");
  };

  const [value, setValue] = useState("");
  return (
    <ScrollView>
      {/* {[...Array(60)].map((_, i) => (
        <Text key={i} style={{ fontSize: 24 }}>
          Hello world screen. {i + 1}
        </Text>
      ))} */}
      {/* <Button title="click me" onPress={pressMe} />
      <Switch onValueChange={toggleSwitch} value={isEnabled}/> */}
      <TextInput
        keyboardType="numbers-and-punctuation"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1 }}
        multiline
        numberOfLines={4}
        placeholder="Enter your text..."
      />
      {/* pressable is wrapper to make any component pressable */}
      <Pressable onPress={pressMe}>
        <Text>Make me pressable</Text>
      </Pressable>
    </ScrollView>
  );
}
