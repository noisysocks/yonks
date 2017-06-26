import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import LinkButton from './LinkButton';
import TextInput from './TextInput';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    const post = props.post || {};
    this.state = {
      id: post.id || null,
      title: post.title || '',
      url: post.url || '',
      platform: post.platform || '',
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
              required
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
              required
              onChange={this.handleUrlChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>Platform</b>
            <TextInput
              placeholder="Friendface"
              tabIndex="3"
              value={this.state.platform}
              required
              onChange={this.handlePlatformChange}
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
              required
              onChange={this.handleWhenChange}
            />
          </label>
        </p>
        <ButtonGroup>
          <Button tabIndex="5">Save</Button>
          {this.state.id &&
            <LinkButton
              href={`#post/${this.state.id}/delete`}
              dangerous
              onClick={this.handleDeleteClick}
            >
              Delete
            </LinkButton>}
        </ButtonGroup>
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();

    const { title, url, platform, when } = this.state;
    if ([title, url, platform, when].every(field => field.trim())) {
      this.props.onSubmit(this.state);
    } else {
      alert('Please fill out all fields.');
    }
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleUrlChange = e => {
    this.setState({ url: e.target.value });
  };

  handlePlatformChange = e => {
    this.setState({ platform: e.target.value });
  };

  handleWhenChange = e => {
    this.setState({ when: e.target.value });
  };

  handleDeleteClick = e => {
    e.preventDefault();
    this.props.onDelete(this.state.id);
  };
}

PostEditor.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostEditor;
