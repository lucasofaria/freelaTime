import colors from '@/constants/colors';
import { View, Text, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <View>
      <Text style={styles.title}>Freela<Text style={{ color: colors.green }}>Time</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    color: colors.white,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }, 
})