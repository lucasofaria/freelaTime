import colors from '@/constants/colors';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

export default function Index() {

  return (
    <SafeAreaView style={styles.containe}> 
      <ActivityIndicator size={60} color={colors.green} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containe:{
    flex: 1,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
})