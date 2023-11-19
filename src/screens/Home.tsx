import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

const names = ["Marcelo", "Joaquim", "Viviane", "João", "Maria", "José", "Pedro", "Paulo", "Lucas", "Luciana", "Luis", "Luiza"];

export function Home() {

  const handleParticipantRemove = (name: string) => {
    console.log("Removendo participante " + name);
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
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={names}
        renderItem={
          ({ item }) => <Participant
            name={item}
            onRemove={() => handleParticipantRemove("Marcelo")} />
        }
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}