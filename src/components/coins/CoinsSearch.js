import React, { Component } from 'react';
import { TextInput, Platform, View, StyleSheet } from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';

class CoinsSearch extends Component {

  state = {
    query: ""
  }

  handleText = (query) => {
    this.setState({ query });

    if (this.props.onChange) {
      this.props.onChange(query);
    }

  }

  render() {

    const { query } = this.state;

    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS == 'ios' ?
              styles.textInputIOS :
              styles.textInputAndroid
            ]}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search coin"
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 16,
    color: "#fff"
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8
  }
});

export default CoinsSearch;