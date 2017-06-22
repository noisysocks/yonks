import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from './Button';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    const post = props.post || {};
    this.state = {
      id: post.id || null,
      title: post.title || '',
      url: post.url || '',
      provider: post.provider || '',
      when: post.date ? moment(post.date).format('MMM D, H:mm') : '',
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            <b>Title</b>
            <TextInput
              placeholder="11 Photos You Won't Believe Are Real"
              tabIndex="1"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>URL</b>
            <TextInput
              placeholder="http://example.com/11-photos-you-wont-believe-are-real"
              tabIndex="2"
              value={this.state.url}
              onChange={this.handleUrlChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>Provider</b>
            <TextInput
              placeholder="Friendface"
              tabIndex="3"
              value={this.state.provider}
              onChange={this.handleProviderChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>When</b>
            <TextInput
              placeholder="April 28, 17:00"
              tabIndex="4"
              value={this.state.when}
              onChange={this.handleWhenChange}
            />
          </label>
        </p>
        <p>
          <Button tabIndex="5">Save</Button>
        </p>
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleUrlChange = e => {
    this.setState({ url: e.target.value });
  };

  handleProviderChange = e => {
    this.setState({ provider: e.target.value });
  };

  handleWhenChange = e => {
    this.setState({ when: e.target.value });
  };
}

PostEditor.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default PostEditor;
