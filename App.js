import { FlatList, View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Casalzinho Snoopy',
      descricao: 'Amor em forma de amigurumi! Casalzinho Snoopy disponível na AmiguLand — feito à mão pra derreter corações',
      imagem: 'https://cdn.pixabay.com/photo/2022/04/20/20/59/crochet-bear-7146190_1280.jpg'
    },
    {
      id: 2,
      nome: 'Chewbacca',
      descricao: 'Direto de uma galáxia muito, muito distante… Chewbacca chegou em versão chaveirinho amigurumi! Perfeito pra levar a Força geek sempre com você. Encomendas abertas!',
      imagem: 'https://cdn.pixabay.com/photo/2018/03/22/11/01/amigurumi-3250032_1280.jpg'
    },
    {
      id: 3,
      nome: 'Lotso',
      descricao: 'Lotso, direto do Toy Story pra AmiguLand! Fofo demais pra ser vilão. Feito à mão com carinho, encomendas abertas',
      imagem: 'https://cdn.pixabay.com/photo/2018/03/22/11/01/amigurumi-3250031_1280.jpg'
    },
    {
      id: 4,
      nome: 'Sulley',
      descricao: 'Fofura em versão chaveiro!',
      imagem: 'https://cdn.pixabay.com/photo/2018/07/31/14/10/amigurumi-3575171_1280.jpg'
    }
  ]

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{uri: item.imagem}} />
      <Card.Title title={item.nome} subtitle={item.descricao} />
      <Card.Content>
        <Text style={styles.preco}>{item.preco}</Text>
      </Card.Content>
    </Card>
  )

  return (
    <View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#88c5e4'
  },
  card: {
  
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#e5c1f3ff',
    width: 280
  },
  preco: {
    marginTop: 8,
    fontWeight: 'bold'
  }
})