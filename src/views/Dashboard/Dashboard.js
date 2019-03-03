import React from 'react';
import Sidebar from '../../components/Sidebar';
import firebase from '../../config/firebase';

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
    const {link} = this.state;
    return (
      <div>
        Dashboard
        <Sidebar categories={this.state.categories} />
        <input
          type="text"
          name="link"
          placeholder="URL"
          onChange={this.onChange}
          value={link}
        />
        <button onClick={this.handleSubmit}>記事を追加する</button>
      </div>
    );
  }
}

export default Dashboard;
