import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./path/to/your/image.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Hijab App</Text>
        <Text style={styles.description}>
          Selamat datang di Hijab App, tempat terbaik untuk menemukan berbagai
          macam hijab yang sesuai dengan gaya Anda.
        </Text>
        <Text style={styles.version}>Versi Aplikasi: 1.0.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  version: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default AboutScreen;