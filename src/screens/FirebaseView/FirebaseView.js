import React, { Component } from 'react';
import { View, Text, ListView, Button } from 'react-native';
import * as firebase from 'firebase';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRVhe-3JA-EPirflSBx96Nv0nAicNhW3Y",
  authDomain: "test-110f8.firebaseapp.com",
  databaseURL: "https://test-110f8.firebaseio.com",
  projectId: "test-110f8",
  storageBucket: "test-110f8.appspot.com",
  messagingSenderId: "96429821770"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.default;

class FirebaseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  static navigationOptions = {
    title: 'Home'
  };

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snapshot) => {

      // get children as an array
      var items = [];

      snapshot.forEach((child) => {
        items.push({
          title: child.val(),
          key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(item) => <Text>{item.title}</Text>}
          enableEmptySections={true}
          style={styles.listview}/>
      </View>
    );
  }
};

export default FirebaseView