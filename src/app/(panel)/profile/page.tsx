import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.containe}>
      <Text>
        Pagina do perfil
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