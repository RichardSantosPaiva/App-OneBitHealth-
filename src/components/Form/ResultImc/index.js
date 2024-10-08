import React from "react"
import { View, Text, Share , TouchableOpacity } from "react-native"
import styles from "./style.js"

export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message:"Meu imc hoje é: " + props.resultImc, 
    })
  }

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.numberImc}>{props.messageResultImc}</Text>
        <Text style={styles.information}>{props.resultImc}</Text>  
        <TouchableOpacity 
          onPress={onShare}
          style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}