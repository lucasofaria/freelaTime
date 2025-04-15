import colors from '@/constants/colors';
import { useAuth } from '@/src/contexts/AuthContext';
import { supabase } from '@/src/lib/supabase';
import { router } from 'expo-router';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Header from '@/components/Header';

export default function Profile() {
  const { setAuth, user, getUserName } = useAuth();
  
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
      <Header />

      <View style={styles.areaAvatar}>
        <Text style={{fontSize: 50, color: colors.grayLight, zIndex: 99}}>+</Text>
      <Image 
        source={require('@/assets/images/avatar.png')} 
        style={styles.avatar} 
      />
      </View>
      
      <Text style={styles.textName}>
        {getUserName()}
      </Text>

      <Text style={styles.textEmail}>
        {user?.email}
      </Text>

      <TouchableOpacity onPress={handleSignout} style={styles.areaUpdatePerfil}>
        <Text style={{color: colors.black, fontSize: 16, fontWeight: 'bold'}}>Atualizar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignout} style={styles.areaLogout}>
        <Text style={{color: colors.black, fontSize: 16, fontWeight: 'bold'}}>Sair</Text>
      </TouchableOpacity>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containe:{
    flex: 1,
    backgroundColor: colors.gray
  },
  areaAvatar:{
    backgroundColor: colors.white,
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 45,
    marginBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar:{
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
  },
  textName:{
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 15,
    color: colors.white
  },
  textEmail:{
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    marginTop: 11
  },
  areaUpdatePerfil:{
    width: '90%',
    height: 47,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 5,
    marginTop: 23
  },
  areaLogout:{
    width: '90%',
    height: 47,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grayLight,
    borderRadius: 5,
    marginTop: 15
  },
})