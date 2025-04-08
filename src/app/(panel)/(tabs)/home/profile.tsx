import { useAuth } from '@/src/contexts/AuthContext';
import { supabase } from '@/src/lib/supabase';
import { router } from 'expo-router';
import { SafeAreaView, Text, StyleSheet, Button, Alert } from 'react-native';

export default function Profile() {
  const { setAuth, user } = useAuth();
  
  async function handleSignout() {
    const { error } = await supabase.auth.signOut();
    setAuth(null)
    router.replace('/(auth)/signin/page');

    if(error){
      Alert.alert('Erro', error.message);
      return;
    }
  }
  
  
  return (
    <SafeAreaView style={styles.containe}>
      <Text>
        Olá, {user?.email}
      </Text>

      <Button
        title='Sair'
        onPress={handleSignout}
      />
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