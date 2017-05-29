import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    axios.get('/api/posts')
    .then((res) => {
      this.setState({ posts: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  renderPosts() {
    return _.map(this.state.posts, post => (
      <li key={post._id} className="list-group-item">
        <Link to={`/posts/${post._id}`}>
          <h4 className="text-center">{post.title}</h4>
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Blog</h1>
        <h4 className="text-center">物理一 詹雨安</h4>
        <div>
          <button className="btn btn-default">
            <Link to="/posts/new">
              Add a Post
            </Link>
          </button>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default PostsIndex;
