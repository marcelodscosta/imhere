import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export function Home() {
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

      <Participant />
      <Participant />
    </View>
  );
}