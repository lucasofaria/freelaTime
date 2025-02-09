import colors from '@/constants/colors';
import { View, SafeAreaView, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router'; 
import Logo from '@/components/Logo';

export default function Login() {
  return (
    <SafeAreaView style={styles.containe}>
      <Logo/>

      <View style={styles.areaInput}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Digite seu e-mail'
            style={styles.input}
          />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder='Digite sua senha'
            style={styles.input}
            secureTextEntry
          />
        </View>  
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Acessar</Text>
      </Pressable>

      <Link href={"/(auth)/signup/page"} style={styles.link}>
        <Text>Ainda não possui uma conta? Cadastre-se</Text>
      </Link>  

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
  areaInput:{
    marginTop: 28,
    width: '80%'
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
    width: '80%',
    height: 45,
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: colors.green,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color: colors.white,
    fontSize: 22
  },
  link:{
    color: colors.white,
    marginTop: 8,
    fontSize: 16,
  }
})