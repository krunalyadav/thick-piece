import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

export const PostContext = createContext();

class PostsProvider extends Component {
  state = {
    posts: [],
  };

  unsubscribeFromFirestore = null;

  componentDidMount() {
    this.unsubscribeFromFirestore = firestore
      .collection('posts')
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ posts });
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { posts } = this.state;
    const { children } = this.props;
    return (
      <PostContext.Provider value={posts}>{children}</PostContext.Provider>
    );
  }
}

export default PostsProvider;
