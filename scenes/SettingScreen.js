import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SettingScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Setting Screen</Text>
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
  },
});
