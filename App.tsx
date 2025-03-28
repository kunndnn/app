/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Basic from './src/components/Basic';
import TextInputComponent from './src/components/TextInputComponent';
import ScrollViewComponent from './src/components/ScrollViewComponent';
import Styling from './src/components/Styling';
import FlexLayout from './src/components/FlexLayout';
import TouchableComponents from './src/components/Touchable';

function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        nestedScrollEnabled={true}
        bouncesZoom={true}>
        <Basic />
        <TextInputComponent />
        <ScrollViewComponent />
        <Styling />
        <FlexLayout />
        <TouchableComponents />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollViewContent: {
    padding: 20,
  },
});

export default App;
