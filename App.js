import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';

function App(){

  const [value, setValue] = useState (0);
  const incrementValue = () => {
    setValue(value + 1);
}

  return(
      <View style={{flex: 1, backgroundColor: '#222'}}>

          <View style={{flex: 0.5, backgroundColor: 'red'}}></View>

          <View style={{flex: 4, backgroundColor: 'pink'}}>

          <Text style={{color: 'darkred', textAlign: 'center', paddingTop: 10, fontSize: 30, fontWeight: 'bold'}}>
              Alice lindona
              </Text>

          <Image
          source={{uri: 
          'https://cdn.discordapp.com/attachments/1032722197942378630/1096144628970950836/ALICE.jpg'}}
          style={{width: 400, height: 400, marginTop: 40, alignSelf: 'center'}}
          />

              <Text style={{color: 'darkred', textAlign: 'center', fontSize: 30}}>EU AMO A MINHA NAMORADA</Text>

              <TouchableOpacity onPress={incrementValue}
              style={{borderWidth: 5, borderRadius: 30, borderColor: "black", backgroundColor: "white", marginBottom: 20, marginHorizontal: 100}}>
               <Text 
                   style={{color: 'red', fontSize: 28, textAlign: "center", fontWeight: "bold"}}>
                  Beijar 😘 {value}
               </Text>
              </TouchableOpacity>

          </View>

          <View style={{flex: 0.5, backgroundColor: 'red'}}></View>

      </View>
  );
}


export default App;

// export default function App(){

//     let preco = 'R$:19,90';
//     let img = 'https://m.media-amazon.com/images/I/61drSyhYPCL._AC_SX569_.jpg';

//     return(
//         <ScrollView style={{backgroundColor: 'lightblue', height: '100%'}}>
//         <View>
//             <Text style={{color: 'black', textAlign: 'center', marginTop: 10, fontSize: 30}}>Olá mundo!</Text>
//             <Text style={{color: 'black', textAlign: 'center'}}>Meu "primeiro" App</Text>
//             <Text style={{ color: 'red', fontSize: 25, margin: 10}}>
//                 Sujeito programador
//                 </Text>
//         </View>

//         <Steve Largura={300} altura={300} fulano="Minecraft steβe"/>

//         <View>
//             <Text style={{color: 'green', fontSize: 40, marginLeft: 10}}>
//                 Steve cocudo </Text>
//             <Text style={{color: 'black', fontSize: 30, marginLeft: 10, marginBottom: 1}}>
//                  {preco}
//             </Text>

//         <TouchableOpacity style={{borderWidth: 5, borderColor: "black", backgroundColor: "white", marginBottom: 20, marginHorizontal: 100}}>
//             <Text
//             style={{color: 'darkgreen', marginBottom: 25, fontSize: 30, textAlign: "center", fontWeight: "bold"}}>
//                 Comprar
//             </Text>
//         </TouchableOpacity>

//         </View>

//         <Image
//             source={{uri: img}}
//             style={{ width: 300, height: 300, marginLeft: 10}}
//         />

//         </ScrollView>
//     );
// }

// function Steve() {
//         return(
//          <View>
//             <Image
//             source={{uri: 'https://img.elo7.com.br/product/zoom/43F75CA/steve-caixa-lembrancinha-tema-minecraft-videogame.jpg'}}
//             style={{ width: this.props.Largura, height: this.props.altura, marginLeft: 10}}
//             />
//             <Text style={{color: 'black'}}> {this.props.fulano} </Text>
//          </View>
//         );
//     }

// class Botão extends Component {

//     render() {
//     return (
//         <Button
//           style={{fontSize: 20, color: 'green'}}
//           styleDisabled={{color: 'red'}}>
//           title="Press Me"
//         </Button>
//     );
//     }
// }
// class App extends Component{
//     render(){
//         return(
//             <View>
//                 <Text>Olá mundo de classes!</Text>
//                 <Text>Meu primeiro App</Text>
//             </View>
//         );
//     }
// }

// export default App;
