import React from "react"
import { View, Text } from "react-native"
import styles from "./style.js"

export default function ResultImc(props) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.numberImc}>{props.messageResultImc}</Text>
      <Text style={styles.information}>{props.resultImc}</Text>
    </View>
  );
}