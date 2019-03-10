import React from 'react';
import Sidebar from '../../components/Sidebar';
import firebase from '../../config/firebase';
import MicrolinkCard from '@microlink/react';
import styled from 'styled-components';
import {Normalize} from 'styled-normalize';

const Container = styled.div``;

class App extends React.Component {
  state = {
    categories: [],
    currentUser: {},
  };

  componentDidMount() {
    const ref = firebase.firestore().collection('categories');

    ref.get().then(querySnapshot => {
      const categories = [];
      querySnapshot.forEach(doc => {
        const {name} = doc.data();
        categories.push({
          id: doc.id,
          name,
        });
        this.setState({
          categories,
        });
      });
    });
  }

  onChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      length: event.target.value.length,
    });
  };

  render() {
    const {categories, currentUser} = this.state;
    return (
      <div>
        <Normalize />
        <Container>
          <Sidebar categories={categories} />
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
