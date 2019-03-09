import React from 'react';
import firebase from '../../config/firebase';
import MicrolinkCard from '@microlink/react';

class Categories extends React.Component {
  state = {
    links: [],
  };

  componentDidMount() {
    this.getLinksDate();
  }

  getLinksDate = () => {
    const ref = firebase
      .firestore()
      .collection('categories')
      .doc(this.props.match.params.id)
      .collection('links');
    ref.get().then(querySnapshot => {
      const links = [];
      querySnapshot.forEach(doc => {
        const {url} = doc.data();
        links.push({
          id: doc.id,
          url,
        });
        console.log(links);
        this.setState({
          links,
        });
      });
    });
  };
  render() {
    const {links} = this.state;
    return (
      <div>
        {links.map(links => (
          <div key={links.id}>
            <MicrolinkCard url={links.url} size="large" />
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
