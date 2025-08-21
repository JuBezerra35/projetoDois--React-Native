import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Cartao></Cartao>
      <Cartao></Cartao>
    </View>
  );
}

function Cartao() {
  return (
    <View style={styles.caixaCartao}>
      <Image 
       source={{uri: 'https://picsum.photos/200'}}
       style={{width:200, height:200}}
       />
      <Text style={styles.textoCartao}>Jully</Text>
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


