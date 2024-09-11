import React from "react"
import { View, Text, Share } from "react-native"
import styles from "./style.js"

export default function ResultImc(props) {

  const onShare = async () => {
    
  }

  return (
    <View style={styles.resultImc}>
      <Text style={styles.numberImc}>{props.messageResultImc}</Text>
      <Text style={styles.information}>{props.resultImc}</Text>
    </View>
  );
}