import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import Header from './src/Header';
import List from './src/List';

export default function App(){

  const [feed, setFeed] = useState([
    { 
      id: '1',
      nome: 'Marcelo Ribeiro',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1
    },
    { 
      id: '2',
      nome: 'Marcos Ribeiro',
      descricao: 'Isso sim é ser raiz !!!',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: true,
      likers: 1
    },
    { 
      id: '3',
      nome: 'Felipe Ribeiro',
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui!',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0
    },
    { 
      id: '4',
      nome: 'Roberta Ribeiro',
      descricao: 'Pausa para o café',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1
    },   
    { 
      id: '5',
      nome: 'Marcia Ribeiro',
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui!',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32
    }    
  ])

  return(
    <View style={styles.container}>
      <Header/>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item) => item.id }
        data={feed}
        renderItem={ ({ item }) => <List data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})