import React, { Component } from 'react';
import TextInput from './TextInput';
import Button from './Button';

class PostEditor extends Component {
  state = {
    title: '',
    url: '',
    provider: '',
    time: '',
  };

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
            <b>Time</b>
            <TextInput
              placeholder="April 28, 17:00"
              tabIndex="4"
              value={this.state.time}
              onChange={this.handleTimeChange}
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

  handleTimeChange = e => {
    this.setState({ time: e.target.value });
  };
}

export default PostEditor;
