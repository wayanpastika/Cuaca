import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Volumebalok from './src/coba/VolumeBalok';
//import Header from './src/cuaca/Header';
import PrakiraanCuaca from './src/coba/PrakiraanCuaca';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.ContainerMain}>
      <PrakiraanCuaca />


      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerMain: {
    flex: 1
  }
});
