import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Project() {
  return (
    <SafeAreaView style={styles.containe}>
      <Text>
        Pagina do projeto
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