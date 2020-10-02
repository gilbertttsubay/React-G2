import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

export default function App() {
  const [name, setName] = useState()

  const save = async () => {
    try{
        await AsyncStorage.setItem("Namaku", name)
    } catch(err){
        alert(err)
    }
  }

  const load = async() => {
    try {
        let name = await AsyncStorage.getItem("Namaku")

        if(name !== null) {
          setName(name)
        }
    } catch(err) {
        alert(err)
    }
  }

  const remove = async() => {
    try {
      await AsyncStorage.removeItem("Namaku")
    } catch(err) {
      alert(err)
    } finally {
      setName("")
    }
  }

  useEffect(() => {
    load()
    return () => {
      []
    }
  }, [input])
  return (
    <View style={styles.container}>

        <Text>{name}</Text>

        <Text style={styles.name}>What is your name</Text>

        <TextInput style={styles.input} onChangeText={text => setName(text)}/>

        <TouchableOpacity onPress={() => save()}>
          <Text>Simpan</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => remove()}>
          <Text>Hapus</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 27,
  },

  input:{
    borderWidth:1,
    borderColor:"chocolate"
  }
});
