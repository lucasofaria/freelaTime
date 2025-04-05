import colors from '@/constants/colors';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.areaInput}>
      <Text style={styles.title}>Freela<Text style={{ color: colors.green }}>Time</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaInput:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 53,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
  },
  title:{
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }, 
})