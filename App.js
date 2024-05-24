import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>My name is <B>Samuel</B></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  }
});
