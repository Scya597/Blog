import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleSubmit() {
    if (this.state.title !== '') {
      axios.post('/api/posts', {
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

  render() {
    return (
      <div>
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
        </form>
        <button type="submit" className="btn btn-default"><Link to="/">Cancel</Link></button>
      </div>
    );
  }
}

export default PostsNew;
