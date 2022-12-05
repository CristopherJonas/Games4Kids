import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/Card';

export const Home = () =>{
  return (
    <View style={styles.container}> 
      <Card size='s'/>
      <Card size='m'/>
      <Card size='l'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
