import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.fetchPost = this.fetchPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.fetchPost(id);
  }

  handleSubmit() {
    const { id } = this.props.match.params;
    if (this.state.title !== '' && this.state.content !== '') {
      axios.put(`/api/posts/${id}`, {
        title: this.state.title,
        content: this.state.content,
      })
      .catch(err => console.log(err));
    }
    this.props.history.push('/');
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  fetchPost(id) {
    axios.get(`/api/posts/${id}`)
    .then((res) => {
      this.setState({ title: res.data.title, content: res.data.content });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
          />
        </div>
        <div>
          <textarea
            form="usrform"
            value={this.state.content}
            onChange={this.handleContentChange}
            className="form-control"
            rows="20"
          />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        <button type="submit" className="btn btn-default"><Link to="/">Cancel</Link></button>
      </form>
    );
  }
}

export default PostEdit;
