import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Felino II");
  const [age, setAge] = useState("30");
  const clickHandler = () => {
    setName("chun-li");
    setAge("3");
  };

  const [people, setPeople] = useState([
    { name: "Felino II", id: 1 },
    { name: "Rose Ann", id: 2 },
    { name: "Callie Ysabelle", id: 3 },
    { name: "Felino III", id: 4 },
    { name: "Shaun", id: 5 },
    { name: "Yoshi", id: 6 },
    { name: "Beatles", id: 7 },
  ]);

  const pressHandler = (id) => {
    //alert(id);
    console.log(id);
    setPeople((prevPeople) => {
      console.log(prevPeople);
      return prevPeople.filter((p) => p.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g Felino Salac"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 99"
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        Name {name}, Age {age}
      </Text> */}
      {/* {
        <ScrollView>
          {people.map((p) => (
            <View key={p.key}>
              <Text style={styles.item}>{p.name}</Text>
            </View>
          ))}
        </ScrollView>
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },

  header: {
    backgroundColor: "pink",
    padding: 20,
  },

  boldText: {
    fontWeight: "bold",
  },

  body: {
    backgroundColor: "yellow",
    padding: 20,
  },

  buttonContainer: {
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
