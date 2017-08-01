import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CoreContainer from './src/containers/CoreContainer';
import setup from './src/store/setup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      store: null,
    };
  }

  state: State;

  componentDidMount() {
    setup((store) => {
      this.setState({
        store,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <CoreContainer />
      </Provider>
    );
  }
};

export default App