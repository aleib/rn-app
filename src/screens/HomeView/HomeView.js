import React, { Component } from 'react';
import { View, Text, ListView, Button } from 'react-native';
import * as firebase from 'firebase';
import Entypo from 'react-native-vector-icons/Entypo';

// const firebaseApp = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.default;

class HomeView extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  handlePress = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <Text style={{padding: 10, fontSize: 42}}
          onPress={this.handlePress}>
          Tesssst
        </Text>
        <Button
          onPress={() => navigate('Firebase')}
          title="Firebase"
        />
        <Entypo name="network" size={32} color="green" />
      </View>
    );
  }
};

export default HomeView