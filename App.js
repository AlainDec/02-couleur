import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.green}>
      </View>
      <View style={styles.red}>
      </View>
      <View style={styles.blue}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  green: {
    flex: 3,
    backgroundColor: 'green'
  },
  red: {
    flex: 2,
    backgroundColor: 'red'
  },
  blue: {
    flex: 1,
    backgroundColor: 'blue'
  }
});
