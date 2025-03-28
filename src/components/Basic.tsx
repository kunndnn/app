import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function Basic() {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      {/* view component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      {/* view component */}
      {/* text component */}
      <Text style={styles.myFirstText}> My First React Native Project</Text>
      <Text>
        text components can be <Text style={styles.bold}>nested </Text>
      </Text>
      {/* text component */}

      {/* image component */}
      <Image
        style={styles.image}
        source={{
          uri: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
        }}
      />
      <Image style={styles.image} source={require("../../assets/images/icon.png")} />
      {/* image component */}

      {/* button component */}
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Text>Count is {count}</Text>
      {/* button component */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
  myFirstText: {
    fontSize: 30,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
