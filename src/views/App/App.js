import React from 'react';
import Sidebar from '../../components/Sidebar';
import firebase from '../../config/firebase';
import MicrolinkCard from '@microlink/react';
import styled from 'styled-components';
import {Normalize} from 'styled-normalize';
import {BulletList} from 'react-content-loader';

const Container = styled.div``;

const MyBulletListLoader = () => <BulletList />;

class App extends React.Component {
  state = {
    categories: [],
    currentUser: {},
    showMenu: false,
    isLoading: true,
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
          isLoading: false,
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

  /*
   * DropMenu logick
   */
  showMenu = event => {
    event.preventDefault();

    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  render() {
    const {categories, currentUser, showMenu, isLoading} = this.state;
    return (
      <div>
        <Normalize />
        <Container>
          <Sidebar
            categories={categories}
            modal={this.showMenu}
            showMenu={showMenu}
            isLoading={isLoading}
          />
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
