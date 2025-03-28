import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scroll view component</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        nestedScrollEnabled={true}
        bounces={true}>
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  scrollViewContent: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default ScrollViewComponent;
