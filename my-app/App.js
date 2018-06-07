import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
        angka : "",
        hasil : 0
    }
  }

 hitung = (text) =>  {
    var hasil = 0
    var operator = ""

      for (var i = 0; i < text.length; i++) {
    
        switch(text[i]){           
            case "*": operator = text[i]
              break;
            case "x": operator = text[i]
               break;      
            case "+": operator = text[i]
              break;
            case "-": operator = text[i]
              break;
            case "/": operator = text[i]
              break;
            case " ":
              break;
            default:
                
                if (operator == "*"){
                  hasil *= Number(text[i])
                }else if(operator == "+"){   
                  hasil += Number(text[i])
                }else if(operator == "-"){
                  hasil -= Number(text[i])
                }else if(operator == "/"){
                  hasil /= Number(text[i])
                }else{
                  hasil = Number(text[i])
                } 
                operator = ""  
          }

        }

  console.log(hasil)
        this.setState({hasil : Number(hasil),angka : text
        })
   }

  render() {
    return (
      <View style={styles.container}>

        <Text style={ {fontSize : 32} }>Kalkulator Modern</Text>

        <TextInput
            style={ styles.inputBox }
            value={  this.state.angka } 
            onChangeText={ this.hitung } 
            />

        <Text style={ {fontSize : 20} }>Hasil : { this.state.hasil }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin : 32
  },
  inputBox : {
    width : '100%',
    borderWidth : 1,
    borderColor : 'black',
    borderRadius : 6,
    padding : 12,
    margin : 6,
    fontSize : 15

  }
});