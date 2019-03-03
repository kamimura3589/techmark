import React from 'react';
import firebase from '../../config/firebase';

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
        Categoriry
        {links.map(links => (
          <div key={links.id}>
            <a href={links.url} target="_blank">
              {links.url}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
