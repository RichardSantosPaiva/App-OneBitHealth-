import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
  
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff", // Corrigido para branco completo
    alignItems: "center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:15,
    padding: 10,
  },
  form:{
    width:"100%",
    height:"auto",
  },
  formLabel:{
    color:"#00000",
    fontSize:18,
    paddingLeft:20,
  },
  input:{
    width:"100%",
    backgroundColor:"#f6f6f6",
    borderRadius:50,
    height:40,
    margin:12,
    paddingLeft:10,
  },
  buttonCalculator:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    backgroundColor:"#FF0043",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    margin:30,
  },
  textButtonCalculator:{
    fontSize:20,
    color:"#ffffff"
  },
  errorMensage:{
    color:"red",
    fontWeight:"bold",
    paddingLeft:20,   
  },
  exhibitionResultImc:{
    width:"100%",
    height:"50%",
  },
  listImcs:{
    marginTop:20, 
  },
  resultImcItem:{
    fontSize:28,
    color:"red",
    height:50,
    width:"100%",
    paddingRight:20,
  },
  textResultItemList:{
    fontSize:14,
    color: "red",
  }
});

export default styles;
