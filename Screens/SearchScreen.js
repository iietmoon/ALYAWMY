
import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { withNavigation } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

// StyleSheets

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
});






class SearchScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        platform={"android"}
        placeholder="Rechercher..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={styles.input}
      />

    );
  }
}


// Main  view of the component of The Header and full screen Menu



export default withNavigation(SearchScreen);