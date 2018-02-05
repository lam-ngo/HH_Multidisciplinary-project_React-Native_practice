import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = { value: 0 };

  increment = () => this.setState({ value: this.state.value + 1 });

  decrement = () => this.setState({ value: this.state.value - 1 });

  render() {
    return (
      <View style={styles.container}>
        <Text>Example counter app</Text>
        <Text>Current value: {this.state.value}</Text>
        <Button title="+" onPress={this.increment} />
        <Button title="-" onPress={this.decrement} />
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
