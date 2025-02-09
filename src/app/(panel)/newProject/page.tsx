import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function NewProject() {
  return (
    <SafeAreaView style={styles.containe}>
      <Text>
        Pagina de novo projeto
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