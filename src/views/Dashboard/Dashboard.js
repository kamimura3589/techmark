import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import firebase from '../../config/firebase';

const Container = styled.div`
  margin-top: 32px;
  position: absolute;
  left: 180px;
`;

class Dashboard extends React.Component {
  state = {
    link: '',
    categories: [],
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

  handleSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();
    const {link} = this.state;

    db.collection('links')
      .add({
        link: link,
      })
      .then(() => {
        this.props.history.push('/');
        console.log('sucess');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {categories, link} = this.state;
    return (
      <Container>
        <input
          type="text"
          name="link"
          placeholder="URL"
          onChange={this.onChange}
          value={link}
        />
        <button onClick={this.handleSubmit}>記事を追加する</button>
        <div>
          {categories.map(category => (
            <div key={category.id}>
              <Link to={`/categories/${category.id}`}>{category.name}</Link>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default Dashboard;
