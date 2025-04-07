import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <SafeAreaView style={styles.containe}>
      <Text>
        Pagina de pesquisa
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