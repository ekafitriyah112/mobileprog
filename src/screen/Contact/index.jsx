import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

class HomeScreen extends React.Component {
  state = {
    products: [
      {
        id: '1',
        name: 'Hijab Satin Elegan',
        image: require('./path/to/images/hijab1.jpg'),
      },
      {
        id: '2',
        name: 'Hijab Modern Polos',
        image: require('./path/to/images/hijab2.jpg'),
      },
      {
        id: '3',
        name: 'Hijab Segiempat Motif',
        image: require('./path/to/images/hijab3.jpg'),
      },
    ],
  };

  renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Selamat Datang di Hijab Store</Text>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id}
          renderItem={this.renderProductItem}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;