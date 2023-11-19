import { Text, TouchableOpacity, View } from "react-native";

export function Participant() {
  return (
    <View style={
      {
        backgroundColor: '#1f1e25',
        marginLeft: 16,
        marginBottom: 8,
        marginRight: 16,
        borderRadius: 8,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <Text style={{ color: 'white', flex: 1, padding: 15 }}>Marcelo Costa</Text>

      <TouchableOpacity style={{ height: 56, width: 56, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>-</Text>
      </TouchableOpacity>

    </View>
  )
};