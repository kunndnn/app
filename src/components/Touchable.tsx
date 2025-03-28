import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const TouchableComponents = () => {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable components</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpacityCount(opacityCount + 0.1)}>
        <Text style={styles.btnText}>Touchable Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
      underlayColor={'#ff0000'}
      onPress={()=>setHighlightCount(highlightCount+1)}
      style={styles.button}
      >
        <Text style={styles.btnText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#096dbe',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TouchableComponents;
