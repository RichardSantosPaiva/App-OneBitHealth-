import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: "center", // Corrigido para alignItems
    width: "100%",
    // Font properties should not be here
  },
  information: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  numberImc: {
    fontSize: 18, // Font size should be in a specific style for the IMC value
    color: "#FF0043",
    fontWeight: "bold",
  }
});

export default styles;
