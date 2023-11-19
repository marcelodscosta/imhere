import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";


export function Home() {

  const [name, setName] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handleParticipantAdd = () => {
    if (name.includes(participantName)) {
      return Alert.alert("Participante já adicionado!");
    }
    setName(preventState => [...preventState, participantName]);
    setParticipantName("");
  };

  const handleParticipantRemove = (name: string) => {

    Alert.alert("Remover participante", `Deseja remover ${name}?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
          setName(preventState => preventState.filter(
            participant => participant !== name
          ));
          Alert.alert("Removido com sucesso!")
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.dateName}>Sexta, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={name}
        renderItem={
          ({ item }) => <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        }
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={{
          color: 'white',
          marginLeft: 20,
        }}>Nenhum participante adicionado.</Text>}
      />

    </View>
  );
}