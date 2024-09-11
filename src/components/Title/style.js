import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: "center",
    justifyContent: "center", // Corrigido aqui
    padding: 10,
  },
  textTitle: { // Corrigido para usar o mesmo nome
    color: "#FF0043",
    fontSize: 24,
    fontWeight: "bold",
  }
});

export default styles;
