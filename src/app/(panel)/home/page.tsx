import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.containe}>
      <Text>
        Pagina Home
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containe:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})