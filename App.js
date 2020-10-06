import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export default function App() {
  const [name, setName] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, [refreshing]);

  const save = async () => {
    try {
      await AsyncStorage.setItem("Namaku", name);
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      let name = await AsyncStorage.getItem("Namaku");

      if (name !== null) {
        setName(name);
      }

      let jsonValue = await AsyncStorage.getItem("Namaku");

      if (jsonValue != null) {
        setName(JSON.parse(jsonValue));
      }
    } catch (err) {
      alert(err);
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("Namaku");
    } catch (err) {
      alert(err);
    } finally {
      setName("");
    }
  };

  useEffect(() => {
    load();
    return () => {
      [];
    };
  }, []);
  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text>{name}</Text>

          <Text style={styles.name}>What is your name</Text>

          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />

          <TouchableOpacity onPress={() => save()}>
            <Text>Simpan</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => remove()}>
            <Text>Hapus</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 27,
  },

  input: {
    borderWidth: 1,
    borderColor: "chocolate",
  },
});
