import { Alert, Button, Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  const handlePress = () => {
    console.log('boom');
    Alert.alert('title','my message')
  };
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <Text style={tw`text-lg font-bold text-blue-500`}>Hello Tailwind</Text>
      <View style={tw`mt-4 bg-blue-500 p-3 rounded`}>
        <Text style={tw`text-white`}>Click Me</Text>
      </View>
      <View style={tw`mt-4 bg-blue-500 p-3 rounded`}>
        <Text style={tw`text-black`}>Click Me</Text>
      </View>
      <View style={tw`mt-2`}>
        <Button title="hello" onPress={handlePress}></Button>
      </View>
    </View>
  );
}
