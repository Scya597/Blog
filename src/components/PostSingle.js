import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PostSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: { title: '', content: '' },
    };
    this.fetchPost = this.fetchPost.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    axios.delete(`/api/posts/${id}`)
    .catch((err) => {
      console.log(err);
    });
    this.props.history.push('/');
  }

  fetchPost(id) {
    axios.get(`/api/posts/${id}`)
    .then((res) => {
      this.setState({ post: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onEditClick() {
    const { id } = this.props.match.params;
    this.props.history.push(`/posts/edit/${id}`);
  }

  render() {
    const { post } = this.state;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <button className="btn btn-default">
          <Link to="/">Back To Index</Link>
        </button>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-default"
        >
          Delete Post
        </button>
        <button
          onClick={this.onEditClick}
          className="btn btn-default"
        >
          Edit Post
        </button>
        <h1>{post.title}</h1>
        <textarea
          form="usrform"
          value={post.content}
          className="form-control"
          rows="20"
        />
      </div>
    );
  }
}

export default PostSingle;
