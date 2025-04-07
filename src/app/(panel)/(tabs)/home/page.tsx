import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import colors from '@/constants/colors';
import Header from '@/components/Header'
import { router } from 'expo-router'; 

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  function startCronometro(){
    Alert.alert('Cronometro iniciado');
  }

  return (
    <SafeAreaView style={styles.containe}>
      <Header/>
      
      <View style={styles.areaPicker}>
        <Picker
          style={styles.picker}
          selectedValue={selectedProject}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedProject(itemValue)
          }>

          <Picker.Item label="Selecione um projeto" value="" />    
        
        </Picker>
      </View>
    
      <View style={styles.areaCronometro}>
        <Text style={styles.cronometro}>00:00:00</Text>
      </View>

      <Pressable style={styles.areaButtons} onPress={startCronometro}>
        <Ionicons name='play' size={35} color={colors.white}/>
      </Pressable>

      <View style={styles.areaLaps}>
        <Text style={styles.text}>5th lap: 00:30:05</Text>
        <Text style={styles.text}>5th lap: 00:30:05</Text>
        <Text style={styles.text}>5th lap: 00:30:05</Text>
        <Text style={styles.text}>5th lap: 00:30:05</Text>
        <Text style={styles.text}>5th lap: 00:30:05</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containe:{
    flex: 1,
    backgroundColor: colors.gray
  },
  areaPicker:{
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 45,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#6C757D',
    borderRadius: 6,
    color: colors.white
  },
  picker:{
    fontSize: 16,
    color: colors.white,
  },
  areaCronometro:{
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: 250,
    height: 250,
    borderWidth: 6,
    borderColor: colors.black,
    borderRadius: 125,
    color: colors.white,
  },
  cronometro:{
    fontSize: 40,
    color: colors.white,
    fontWeight: 'bold'
  },
  areaButtons:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.green,
  },
  areaLaps:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    width: '90%',
  },
  text:{
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold'
  }
})