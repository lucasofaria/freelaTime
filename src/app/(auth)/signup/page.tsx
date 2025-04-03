import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import Logo from '../../../../components/Logo';
import colors from '@/constants/colors';
import { supabase } from '@/src/lib/supabase';

export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(){
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options:{
        data: {
          name: name
        }
      }
    })

    if(error){
      Alert.alert('Error', error.message)
      setLoading(false)
      return;
    }

    Alert.alert('Cadastro realizado com sucesso!')
    setLoading(false);
    router.replace('/')

  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: colors.gray}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
       
          <Logo/>

          <View style={styles.form}>
            <View>
              <TextInput
                placeholder='Nome completo'
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>

            <View>
              <TextInput
                placeholder='E-mail'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
        
            <View>
              <TextInput
                placeholder='Senha'
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>

          <Pressable style={styles.button} onPress={handleSignUp}>
            <Text style={styles.textButton}>
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Text>
          </Pressable>
          
          <Text onPress={() => router.back()} style={styles.text}>Acesse sua conta</Text>
        
        </View>   
      </ScrollView>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form:{
    marginTop: 28,
    width: '90%',
  },
  label:{
    color: colors.white,
    marginBottom: 10,
    fontSize: 16
  },
  input:{
    width: '100%',
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 6,
    marginBottom: 12,
    padding: 10,
    fontSize: 16
  },
  button:{
    width: '90%',
    height: 45,
    marginTop: 12,
    backgroundColor: colors.green,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color: colors.white,
    fontSize: 22
  },
  text:{
    color: colors.white,
    marginTop: 8,
    fontSize: 16
  }
})
