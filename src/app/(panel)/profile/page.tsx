import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Header from '@/components/Header';

export default function Profile() {
  return (
    <SafeAreaView style={styles.containe}>
      <Header/>
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