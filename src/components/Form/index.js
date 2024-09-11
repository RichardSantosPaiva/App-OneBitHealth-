import React, {useState} from "react"
import {TextInput, View, Text, Button} from "react-native";
import ResultImc from './ResultImc';

export default function Form() {

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc,setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

//parei aqui na aula https://youtu.be/JusFvRHWDyU?si=CgZiJvLeNA-Lj3wy
function imcCalculator(){
  return setImc((weight/(height*height)).toFixed(2))
}

function validationImc() {
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual"+imc)
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc('preencha o peso e altura')
}
  return (
    <View>
         <View>
          <Text>Altura</Text>
          <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            KeyboardType="numeric"

          />
          <Text>Peso</Text> 
          <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 76.365"
            KeyboardType="numeric"
          />
          <Button 
          onPress={() => validationImc()}
          title={textButton}/>
         </View>
         <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}