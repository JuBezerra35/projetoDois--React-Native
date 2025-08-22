import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {

  const [tamanho, setTamanho] = useState(100);

  function clicouBotao() {
    if(tamanho == 100)
     setTamanho(300);
    else
      setTamanho(100);

  }

  return (
    <View style={styles.container}>
      <Cartao nomeProfessor={'Freddy'} medida={tamanho}></Cartao>
      <Button title='Aumentar Cartão' onPress={clicouBotao}></Button>
    </View>
  );
}

function Cartao(props) {
  const { nomeProfessor, medida} = props;
  return (
    <View style={styles.caixaCartao}>
      <Image 
       source={{uri: 'https://picsum.photos/200'}}
       style={{width: medida, height: medida}}
       />
      <Text style={styles.textoCartao}>{nomeProfessor}</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  caixaCartao: {
    backgroundColor:'#ebc98aff',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginBottom:5,
  },

  textoCartao: {
    fontSize:24,
    color: '#626b75ff',
    paddingVertical:5,
  },

});


