import {View, Text, StyleSheet} from 'react-native';
const Styling = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 15,
            fontFamily: 'bold',
          }}>
          Inline Styling example
        </Text>
      </View>
      <View
        style={[
          styles.combinedStyle,
          {
            borderWidth: 2,
            borderColor: 'purple',
          },
        ]}>
        <Text style={[styles.combinedText, {textDecorationLine: 'underline'}]}>
          combined text style 
        </Text>
        <Text style={[styles.combinedText, {color:'red',fontWeight:'bold'}]}>
          combined text style with different color
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  first: {
    backgroundColor: '#0000ff',
    padding: 10,
    fontWeight: 'bold',
  },
  combinedStyle: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  combinedText: {
    color: 'black',
    fontSize: 14,
  },
});
export default Styling;
